import { GateStone } from './gate_stone';
import { Stone } from './stone';

export class DiamondStone extends GateStone {
  constructor( params, args ){
    super( params, args );
  }

  static get imgSources(){
    return { closed: './tile_img/diamond_stone.jpg',
             open: './tile_img/diamond_open.png'};
  }
}