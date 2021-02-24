import { PressurePlate } from './pressure_plate';

export class DiamondPressurePlate extends PressurePlate {
  constructor( params, args ){
    params.gates = 'DiamondStone';
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return levelIndex;
  }

  static get imgSources(){
    return { up: './tile_img/diamond_pressure_plate.png',
             down: './tile_img/diamond_pressure_plate_down.png' };
  }
}