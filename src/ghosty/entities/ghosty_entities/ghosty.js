import { GhostyEntity } from '../ghosty_entity';

export class Ghosty extends GhostyEntity {
  constructor( params, args ){
    super( {
      keyDownSubscriptions: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    }, args, 10 );
  }

  static get imgSources(){
    return { default: './tile_img/ghosty_left.png'};
  }

  keyDownHandler( key ){
    const direction = key.slice(5).toLowerCase();
    this.requestMove( direction, true );
  }

  validateMove( direction, automove, requestChain = [] ){
    return [false, this.requestMove( direction, false, requestChain, false )];
  }
}