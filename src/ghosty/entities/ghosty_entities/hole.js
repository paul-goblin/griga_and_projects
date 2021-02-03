import { GhostyEntity } from '../ghosty_entity';

export class Hole extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 1 );
  }

  static get imgSources(){
    return { default: './tile_img/hole_background.jpg'};
  }
}