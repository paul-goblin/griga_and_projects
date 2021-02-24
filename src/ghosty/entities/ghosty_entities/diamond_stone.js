import { GateStone } from './gate_stone';

export class DiamondStone extends GateStone {
  constructor( params, args ){
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return levelIndex;
  }

  static get imgSources(){
    return { closed: './tile_img/diamond_stone.jpg',
             open: './tile_img/diamond_open.png'};
  }
}