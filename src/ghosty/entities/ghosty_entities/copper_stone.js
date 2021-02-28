import { GateStone } from './gate_stone';

export class CopperStone extends GateStone {
  constructor( params, args ){
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { closed: './tile_img/copper_stone.jpg',
             open: './tile_img/copper_open.png'};
  }
}