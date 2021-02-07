import { directionToSide, GhostyEntity, oppositeSide } from '../ghosty_entity';

export class Hole extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 1 );
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
  
    this.newEntityWasPlacedOnTile();
    this.subscribeToSceneLoaded();
  }

  static get imgSources(){
    return { default: './tile_img/hole_background.jpg'};
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Hole' );
    return levelIndex;
  }

  setHole( hole, side ){
    this[`hole${side}`] = hole;
    this[`border${side}`].delete();
    this[`border${side}`] = null;
  }

  removeHole( side ){
    this[`hole${side}`] = null;
    this[`border${side}`] = this.grid.newEntityInstance('HoleBorder', {side, hole:this}, {c:this.c,r:this.r} );
  }

  //should have the alias Update Which Entities are Down
  newEntityWasPlacedOnTile(){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    for (let layerDigit = 3; layerDigit < 10; layerDigit++) {
      const downEntity = entitiesOnTile.find( e => e.layer === layerDigit );
      const upEntities = entitiesOnTile.filter( e => e.layer === layerDigit + 10 );
      const upEntity = upEntities[upEntities.length-1];
      if ( !downEntity &&upEntity ){
        upEntity.moveDown();
      }
    }
  }

  taskDone(){
    this.newEntityWasPlacedOnTile();
    return true;
  }

  sceneLoadedHandler(){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    if ( entitiesOnTile[0] ){
      this.newEntityWasPlacedOnTile( entitiesOnTile[0] );
    }
  }

  beforeDelete(){
    Object.values( directionToSide ).forEach( side => {
      if ( this[`border${side}`] ) {
        this[`border${side}`].delete();
      } else {
        this[`hole${side}`].removeHole( oppositeSide[side.toLowerCase()] );
      }
    } );
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    for (let layerDigit = 3; layerDigit < 10; layerDigit++) {
      const downEntityOnTile = entitiesOnTile.find( e => e.layer === layerDigit);
      const upEntityOnTile = entitiesOnTile.find( e => e.layer === layerDigit + 10);
      if (downEntityOnTile) {
        if (upEntityOnTile) {
          downEntityOnTile.delete();
        } else {
          downEntityOnTile.moveUp();
        }
      }
    }
  }

  entityOnSameTileWasDeleted( deletedEntity ){
    this.newEntityWasPlacedOnTile();
  }
}