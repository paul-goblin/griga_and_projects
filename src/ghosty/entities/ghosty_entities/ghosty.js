import { GhostyEntity } from '../ghosty_entity';

export class Ghosty extends GhostyEntity {
  constructor( params, args ){
    super( {
      keyDownSubscriptions: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    }, args, 17 );
    this.validatedEntities = [];
    this.currentImage = 'right';
  }

  static get imgSources(){
    return { right: './tile_img/ghosty_right.png',
             left: './tile_img/ghosty_left.png',
             up: './tile_img/ghosty_mid_right.png',
             down: './tile_img/ghosty_mid_left.png'};
  }

  keyDownHandler( key ){
    const direction = key.slice(5).toLowerCase();
    this.currentImage = direction;
    if (this.requestMove( direction )) {
      this.move( direction );
      this.griga.ghosty.play.keyTrackEntity.sceneChanged = true;
    }
  }

  validateMove( requestChain ){
    if (this.validatedEntities.includes( requestChain[requestChain.length-1][0] )){
      return true;
    }
    this.validatedEntities.push(requestChain[requestChain.length-1][0]);
    let success = this.requestMove( requestChain[requestChain.length-1][1] );
    this.validatedEntities = [];
    return success;
  }
}