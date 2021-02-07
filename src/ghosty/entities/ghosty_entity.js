import { Entity } from '../../griga/entity';

export const directionToSide = {
  up: 'Top',
  down: 'Bottom',
  left: 'Left',
  right: 'Right'
}

export const oppositeDirection = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

export const oppositeSide = {
  bottom: 'Top',
  top: 'Bottom',
  right: 'Left',
  left: 'Right',
}

export class GhostyEntity extends Entity {
  constructor( params, args, layer = 1 ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    const superParams = {layer};
    if (params.layerAddend) { superParams.layer += params.layerAddend };
    super( superParams, args );
    this.widthMultiplier = 1;
    this.heightMultiplier = 1;
    this.layerAddend = params.layerAddend || 0;
    this.basisWidth = this.width;
    this.basisHeight = this.height;
    this.basisCOffset = this.cOffset;
    this.basisROffset = this.rOffset;
    this.basisLayer = layer;
    this.movedVertically = 0;
    this.addWidthMultiplier( params.widthMultiplier || 1 );
    this.addHeightMultiplier( params.heightMultiplier || 1 );
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
      this.selectionBackground.setOtherEntity( this );
    }
  }

  static getUnlockLevel( classicLevels ){
    return 0;
  }

  getCurrentParams(){
    return {
      widthMultiplier: this.widthMultiplier,
      heightMultiplier: this.heightMultiplier,
      layerAddend: this.layerAddend
    }
  }

  moveUp(){
    this.movedVertically++;
    this.addHeightMultiplier( 16/14 );
    this.addWidthMultiplier( 16/14 );
    this.addLayerAddend( +10 );
  }

  moveDown(){
    this.movedVertically--;
    this.addHeightMultiplier( 14/16 );
    this.addWidthMultiplier( 14/16 );
    this.addLayerAddend( -10 );
  }

  addWidthMultiplier( multiplier ){
    this.widthMultiplier *= multiplier;
    this.setWidth( this.basisWidth );
    this.setCOffset( this.basisCOffset );
  }

  addHeightMultiplier( multiplier ){
    this.heightMultiplier *= multiplier;
    this.setHeight( this.basisHeight );
    this.setROffset( this.basisROffset );
  }

  addLayerAddend( addend ){
    this.layerAddend += addend;
    this.changeLayer( this.basisLayer );
  }

  setWidth( width ){
    this.basisWidth = width;
    Entity.prototype.setWidth.call( this, width*this.widthMultiplier);
  }

  setHeight( height ){
    this.basisHeight = height;
    Entity.prototype.setHeight.call( this, height*this.heightMultiplier );
  }

  setCOffset( cOffset ){
    this.basisCOffset = cOffset;
    Entity.prototype.setCOffset.call( this, cOffset + (1-this.widthMultiplier)/2 );
  }

  setROffset( rOffset ){
    this.basisROffset = rOffset;
    Entity.prototype.setROffset.call( this, rOffset + (1-this.heightMultiplier)/2 );
  }

  changeLayer( layer ){
    this.basisLayer = layer;
    Entity.prototype.changeLayer.call( this, layer + this.layerAddend );
  }

  move( direction, autoanimate = true ) {
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnNewTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const entitiesOnThisTile = this.grid.getEntityInstances( {
      tile: { c:this.c, r:this.r },
      notType: 'BackgroundTile'
    } );
    entitiesOnNewTile.forEach( entity => {
      entity.entityWillMoveToTile( this, direction );
    } );
    Entity.prototype.move.call( this, absPos );
    entitiesOnNewTile.forEach( entity => {
      entity.entityMovedToTile( this, direction );
    } );
    entitiesOnThisTile.forEach( entity => {
      entity.entityWillLeaveTile( this, direction );
    } );
    entitiesOnThisTile.forEach( entity => {
      entity.entityLeftTile( this, direction );
    } );
    if (autoanimate) {
      if ( !this.renderStartSubscription ){
        this.subscribeToRenderStart();
        this.cOffsetBeforeMove = this.basisCOffset;
        this.rOffsetBeforeMove = this.basisROffset;
        this.widthBeforeMove = this.basisWidth;
        this.heightBeforeMove = this.basisHeight;
      } else {
        this.resetOffsetToBeforeMove();
      }
      this.lastMoveTime = performance.now();
      this.lastMoveDirection = direction;
    }
  }

  requestMove( direction, requestChain = [] ) {
    requestChain.push([this, direction]);
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnNewTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const entitiesOnThisTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => e !== this && e.constructor.name !== 'BackgroundTile' );
    const sucesses = entitiesOnNewTile.map( e => e.validateMove([...requestChain]) );
    const leaveSucesses = entitiesOnThisTile.map( e => e.allowLeave([...requestChain]) );
    if (sucesses.includes( false ) || leaveSucesses.includes( false )) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * validates a move in the given direction. Should only be called from GhostyEntity.startMove;
   * @param {*} requestChain 
   */
  validateMove( requestChain ){
    //avoid overflow, just allow move
    if (requestChain.map( a => a[0] ).includes( this )) {
      return true;
    }
    //add the stack-on-top-behavior for all layer 17 entities (exept ghosties maybe)
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    }
    const allowMove = this.allowMove( requestChain );
    return allowMove;
  }

  resetOffsetToBeforeMove(){
    this.setCOffset( this.cOffsetBeforeMove );
    this.setROffset( this.rOffsetBeforeMove );
  }

  moveOffsetFunction( timeSinceLastMove, moveDuration ){
    const offset = 1 - Math.sqrt( timeSinceLastMove/moveDuration );
    return offset;
  }

  setMoveAnimationOffset( timeSinceLastMove, duration ){
    const absOffset = this.moveOffsetFunction( timeSinceLastMove, duration );
    if (absOffset <= 0) {
      this.resetOffsetToBeforeMove();
      return true;
    }
    else if (this.lastMoveDirection === 'right'){ this.setCOffset( -absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'left'){ this.setCOffset( absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'up'){ this.setROffset( absOffset+this.rOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'down'){ this.setROffset( -absOffset+this.rOffsetBeforeMove ) };
  }

  resetSizeToBeforeMove(){
    this.setHeight( this.heightBeforeMove );
    this.setWidth( this.widthBeforeMove );
    this.movedVertically = 0;
  }

  verticalMoveSizeFunction( timeSinceAnimationStart, duration ){
    const startFactor = Math.pow(14/16, this.movedVertically);
    const startWidth = this.widthBeforeMove * startFactor;
    const startHeight = this.heightBeforeMove * startFactor;
    const width = startWidth + (this.widthBeforeMove - startWidth)*Math.pow( timeSinceAnimationStart/duration, 2 );
    const height = startHeight + (this.heightBeforeMove - startHeight)*Math.pow( timeSinceAnimationStart/duration, 2 );
    return [ width, height ];
  }

  setVerticalMoveAnimationSize( timeSinceAnimationStart, duration ) {
    const [ width, height ] = this.verticalMoveSizeFunction( timeSinceAnimationStart, duration );
    if ( timeSinceAnimationStart > duration ){
      this.resetSizeToBeforeMove()
      return true;
    } else {
      this.setWidth( width );
      this.setHeight( height );
      this.setCOffset( (1-width)/2 );
      this.setROffset( (1-height)/2 );
    }
  }

  renderStartHandler(){
    const timeSinceLastMove = performance.now() - this.lastMoveTime;
    if (this.setMoveAnimationOffset(timeSinceLastMove, 100)) { //is called unnessecarily often
      if (this.setVerticalMoveAnimationSize( timeSinceLastMove - 100, 100 )) {
        this.unsubscribeFromRenderStart();
      }
    }
  }

  /**
   * checks if the requested move is valid. Should be overwritten by Child. Returns allowMove
   * @param {*} requestChain 
   * @param {*} direction 
   * @returns {boolean}
   */
  allowMove( requestChain ){
    return requestChain[ requestChain.length-1 ][0].layer !== this.layer;
  }

  
  allowLeave( requestChain ){
    return true;
  }

  allowPlacing( entity ){
    return entity.layer !== this.layer;
  }

  allowBeingPlaced( tile, editorGrid ){
    return true;
  }

  beforeDelete(){
    //doSomething
  }

  entityOnSameTileWasDeleted( deletedEntity ){
    //doSomething
  }

  entityWillLeaveTile( entity, direction ){
    //doSomething
  }

  entityLeftTile( entity, direction ){
    //doSomething
  }

  entityWillMoveToTile( entity, direction ) {
    //doSomething
  }

  entityMovedToTile( entity, direction ) {
    //doSomething
  }

  //for levelDone check
  taskDone() {
    return true;
  }

  newEntityWasPlacedOnTile( entity ) {
    //doSomething
  }
}