import { GhostyEntity } from '../ghosty_entity';

export class Goal extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 10 );
  }

  static get imgSources(){
    return { default: './tile_img/oil_lamp.png'};
  }

  validateMove(){
    return [false, true];
  }

  entityMovedToTile( entity ){
    if (entity.constructor.name === 'Ghosty') {
      if (this.checkLevelDone()) {
        this.griga.ghosty.levelDone();
      }
    }
  }

  checkLevelDone(){
    return true;
  }
}