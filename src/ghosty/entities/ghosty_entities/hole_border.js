import { directionToSide, GhostyEntity } from '../ghosty_entity';

export class HoleBorder extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 2 );
    this.currentImage = params.side.toLowerCase() || 'top';
    this.hole = params.hole || null;
  }

  static get imgSources(){
    return { top: './tile_img/hole_border_top.png',
             right: './tile_img/hole_border_right.png',
             bottom: './tile_img/hole_border_bottom.png',
             left: './tile_img/hole_border_left.png'};
  }
  
  static getUnlockLevel( classicLevels ){
    return Infinity;
  }

  includeInSceneData(){
    return false;
  }

  allowLeave( requestChain ){
    const valid = directionToSide[requestChain[ requestChain.length-1 ][1]].toLowerCase() !== this.currentImage;
    const down = requestChain[ requestChain.length-1 ][0].layerAddend === -10; //fix
    if (down && !valid) {
      return false;
    } else {
      return true;
    }
  }
}