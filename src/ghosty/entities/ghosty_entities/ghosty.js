import { GhostyEntity } from '../ghosty_entity';

export class Ghosty extends GhostyEntity {
  constructor( params, args ){
    super( {
      keyDownSubscriptions: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    }, args, 10 );
    this.validatedEntities = [];
  }

  static get imgSources(){
    return { default: './tile_img/ghosty_left.png'};
  }

  keyDownHandler( key ){
    const direction = key.slice(5).toLowerCase();
    if (this.requestMove( direction )) {
      this.move( direction );
    }
    this.validatedEntities = [];
  }

  validateMove( requestChain ){
    if (this.validatedEntities.includes( requestChain[requestChain.length-1][0] )){
      return true;
    }
    this.validatedEntities.push(requestChain[requestChain.length-1][0]);
    return this.requestMove( requestChain[requestChain.length-1][1] );
  }
}