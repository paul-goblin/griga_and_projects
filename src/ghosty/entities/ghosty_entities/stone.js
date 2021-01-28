import { GhostyEntity } from '../ghosty_entity';

export class Stone extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 1 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/stone.jpg'};
  }
}