import { GhostyEntity } from '../ghosty_entity';

export class Stone extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 17 );
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

  allowBeingPlaced( tile, editorGrid ){
    const entitiesOnTile = editorGrid.getEntityInstances( {
      tile: tile
    } ).filter( e => !['BackgroundTile', 'Hole', 'HoleBorder'].includes(e.constructor.name) );
    if (entitiesOnTile.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}