import { WoodenBox } from './wooden_box';

export class WoodenBoxCircle extends WoodenBox {
  constructor( params, args ){
    super( params, args, 'circle' );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { default:'./tile_img/wooden_box_octagon.png' };
  }
}