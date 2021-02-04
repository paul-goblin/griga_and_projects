import { GhostyEntity } from '../ghosty_entity';

export class Hole extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 1 );
    if (this.grid.name === 'selection-hotbar') {return}

    this.holeLeft = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('left', 'modulo'), type:'Hole'})[0];
    this.holeRight = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('right', 'modulo'), type:'Hole'})[0];
    this.holeTop = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('top', 'modulo'), type:'Hole'})[0];
    this.holeBottom = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('bottom', 'modulo'), type:'Hole'})[0];

    if (this.holeLeft) { this.holeLeft.setHole(this, 'Right')}
    else { this.borderLeft = this.grid.newEntityInstance('HoleBorder', {side:'left', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeRight) { this.holeRight.setHole(this, 'Left') }
    else { this.borderRight = this.grid.newEntityInstance('HoleBorder', {side:'right', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeTop) { this.holeTop.setHole(this, 'Bottom') }
    else { this.borderTop = this.grid.newEntityInstance('HoleBorder', {side:'top', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeBottom) { this.holeBottom.setHole(this, 'Top') }
    else { this.borderBottom = this.grid.newEntityInstance('HoleBorder', {side:'bottom', hole:this}, {c:this.c,r:this.r} ) };
  }

  static get imgSources(){
    return { default: './tile_img/hole_background.jpg'};
  }

  setHole( hole, side ){
    this[`hole${side}`] = hole;
    this[`border${side}`].delete();
    this[`border${side}`] = null;
  }

  adjustSizeOfEntityOnTop( entity ){
    entity.addHeightMultiplier( 14/16 );
    entity.addWidthMultiplier( 14/16 );
  }

  adjustLayerOfEntityOnTop( entity ){
    entity.addLayerAddend( -10 );
  }

  newEntityWasPlacedOnTile( entity ){
    this.adjustSizeOfEntityOnTop( entity );
    this.adjustLayerOfEntityOnTop( entity );
  }
}