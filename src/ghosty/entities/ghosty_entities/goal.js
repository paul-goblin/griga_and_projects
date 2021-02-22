import { GhostyEntity } from '../ghosty_entity';

export class Goal extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 14 );
  }

  static get imgSources(){
    return { default: './tile_img/oil_lamp.png'};
  }

  allowMove(){
    return true;
  }

  taskDone() {
    let ghosties = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'Ghosty',
    } );
    if (ghosties[0]) {return ghosties[0].layerAddend === this.layerAddend};
    return false;
  }

  allowBeingPlaced(  tile, editorGrid  ){
    const entitiesOnTile = editorGrid.getEntityInstances( {tile} );
    const otherEntity = entitiesOnTile.find( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes(e.constructor.name) );
    if (otherEntity) {return false}
    else {return true}
  }
}