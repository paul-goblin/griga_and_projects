import { PressurePlate } from './pressure_plate';

export class CopperPressurePlate extends PressurePlate {
  constructor( params, args ){
    params.gates = 'CopperStone';
    params.logicGate = 'OR';
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { up: './tile_img/copper_pressure_plate.png',
             down: './tile_img/copper_pressure_plate_down.png' };
  }
}