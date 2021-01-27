import { GhostyEntity } from '../ghosty_entity';

export class Stone extends GhostyEntity {
  constructor( params, args ){
    super( {}, args );
  }

  static get imgSources(){
    return { default: './tile_img/stone.png'};
  }
}