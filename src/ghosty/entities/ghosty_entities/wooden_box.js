import { GhostyEntity } from '../ghosty_entity';

export class WoodenBox extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 10 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/wooden_box.jpg'};
  }

  allowMove(requestChain){
    if (requestChain.length === 1) {
      return this.requestMove(requestChain[0][1], requestChain);
    } else {
      return false;
    }
  }

  entityWillMoveToTile( entity, direction ) {
    this.move( direction );
  }
}