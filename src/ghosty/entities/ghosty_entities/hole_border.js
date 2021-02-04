import { GhostyEntity } from '../ghosty_entity';

const directionToSide = {
  up: 'Top',
  down: 'Bottom',
  left: 'Left',
  right: 'Right'
}

const oppositeDirection = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left'
}

export class HoleBorder extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 2 );
    this.currentImage = params.side || 'top';
    this.hole = params.hole || null;
  }

  static get imgSources(){
    return { top: './tile_img/hole_border_top.png',
             right: './tile_img/hole_border_right.png',
             bottom: './tile_img/hole_border_bottom.png',
             left: './tile_img/hole_border_left.png'};
  }

  includeInSceneData(){
    return false;
  }

  entityMovedToTile( entity, direction ){
    if ( this.currentImage === directionToSide[oppositeDirection[direction]].toLowerCase() ){
      this.hole.adjustSizeOfEntityOnTop( entity );
      this.hole.adjustLayerOfEntityOnTop( entity );
    }
  }
}