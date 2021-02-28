import { directionToSide, GhostyEntity } from '../ghosty_entity';

export class HoleCircle extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 1 );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { default:'./tile_img/hole_circle.png' };
  }

  beforeDelete(){
    const backgroundTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0];
    backgroundTile.moveEntitiesUp( {layerAddend: -10} );
  }

  allowLeave( requestChain ){
    if (requestChain[0][0].layerAddend === -10) {
      return false;
    } else {
      return true;
    }
  }
}