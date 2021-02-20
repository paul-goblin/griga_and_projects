import { GhostyEntity } from '../ghosty_entity';

export class Ghosty extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 17 );
    if (this.grid.name === 'play') {
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach( key => this.subscribeToKeyDown(key));
    }
    this.validatedEntities = [];
    this.currentImage = params.facing || 'right';
  }

  static get imgSources(){
    return { right: './tile_img/ghosty_right.png',
             left: './tile_img/ghosty_left.png',
             up: './tile_img/ghosty_mid_right.png',
             down: './tile_img/ghosty_mid_left.png'};
  }

  getCurrentParams(){
    const params = GhostyEntity.prototype.getCurrentParams.call(this);
    params.facing = this.currentImage;
    return params;
  }

  keyDownHandler( key ){
    let moveDirection = key.slice(5).toLowerCase();
    let imageDirection = moveDirection;
    this.addAnimationFunction( 'move', () => {
      this.currentImage = imageDirection;
      this.removeAnimationFunction('move', 0);
    } );
    if (this.requestMove( moveDirection )) {
      this.griga.ghosty.play.keyTrackEntity.sceneChanged = true;
    } else { moveDirection = 'stay' };
    this.move( moveDirection );
  }

  validateMove( requestChain ){
    if (this.validatedEntities.includes( requestChain[requestChain.length-1][0] )){
      return true;
    }
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    }
    this.validatedEntities.push(requestChain[requestChain.length-1][0]);
    let success = this.requestMove( requestChain[requestChain.length-1][1] );
    this.validatedEntities = [];
    return success;
  }

  animationChainEmptied( category ){
    if (category === 'move' && this.grid.name === 'play') {
      this.griga.ghosty.play.keyTrackEntity.moveAnimationChainOfGhostyEmptied();
    }
  }
}