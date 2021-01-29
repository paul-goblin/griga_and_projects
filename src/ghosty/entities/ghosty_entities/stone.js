import { GhostyEntity } from '../ghosty_entity';

export class Stone extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 10 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/stone.jpg'};
  }

  allowPlacing(){
    return false;
  }

  allowBeingPlaced( tile ){
    const entitiesOnTile = this.griga.grids['editor'].getEntityInstances( {
      tile: tile,
      notType: 'BackgroundTile'
    } );
    if (entitiesOnTile.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}