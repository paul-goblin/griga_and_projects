import { Entity } from '../../griga/entity';

export class GhostyEntity extends Entity {
  constructor( params, args, layer = 1 ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    if (['editor', 'preview', 'selection-hotbar'].includes(args.grid.name)) {
      params = {};
    }
    params.layer = layer;
    super( params, args );
    this.widthMultiplier = 1;
    this.heightMultiplier = 1;
    this.layerAddend = 0;
    this.basisWidth = this.width;
    this.basisHeight = this.height;
    this.basisCOffset = this.cOffset;
    this.basisROffset = this.rOffset;
    this.basisLayer = this.layer;
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
      this.selectionBackground.setOtherEntity( this );
    }
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
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    entitiesOnTile.forEach( entity => {
      entity.entityWillMoveToTile( this, direction );
    } );
    Entity.prototype.move.call( this, absPos );
    entitiesOnTile.forEach( entity => {
      entity.entityMovedToTile( this, direction );
    } );
    if (autoanimate) {
      if ( !this.renderStartSubscription ){
        this.subscribeToRenderStart();
        this.cOffsetBeforeMove = this.basisCOffset;
        this.rOffsetBeforeMove = this.basisROffset;
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
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const sucesses = entitiesOnTile.map( e => e.validateMove(requestChain) );
    if (sucesses.includes( false )) {
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

  setMoveAnimationOffset(){
    const timeSinceLastMove = performance.now() - this.lastMoveTime;
    const absOffset = this.moveOffsetFunction( timeSinceLastMove, 100 );
    if (absOffset <= 0) {
      this.resetOffsetToBeforeMove();
      this.unsubscribeFromRenderStart();
    }
    else if (this.lastMoveDirection === 'right'){ this.setCOffset( -absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'left'){ this.setCOffset( absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'up'){ this.setROffset( absOffset+this.rOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'down'){ this.setROffset( -absOffset+this.rOffsetBeforeMove ) };
  }

  renderStartHandler(){
    this.setMoveAnimationOffset();
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

  allowPlacing( entity ){
    return entity.layer !== this.layer;
  }

  allowBeingPlaced( tile, editorGrid ){
    return true;
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