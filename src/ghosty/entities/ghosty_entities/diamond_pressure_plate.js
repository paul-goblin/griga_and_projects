import { GhostyEntity } from '../ghosty_entity';
import { DiamondStone } from './diamond_stone';
import { PressurePlate } from './pressure_plate';

export class DiamondPressurePlate extends PressurePlate {
  constructor( params, args ){
    params.gates = 'DiamondStone';
    super( params, args );
  }

  static get imgSources(){
    return { up: './tile_img/diamond_pressure_plate.png',
             down: './tile_img/diamond_pressure_plate_down.png' };
  }
}