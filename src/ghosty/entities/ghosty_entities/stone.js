import { GhostyEntity } from '../ghosty_entity';

export class Stone extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 17 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
  }

  static get imgSources(){
    return { default: './tile_img/stone.jpg'};
  }

  allowPlacing( entity ){
    if (this.layer === 7) {return entity.constructor.name === 'Ghosty'}
    else {return entity.constructor.name === 'Hole'}
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