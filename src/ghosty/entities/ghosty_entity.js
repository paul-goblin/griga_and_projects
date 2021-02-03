import { Entity } from '../../griga/entity';

export class GhostyEntity extends Entity {
  constructor( params, args, layer = 1 ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    if (args.grid.name === 'selection-hotbar') {
      params = {
        width: 0.8,
        height: 0.8,
        cOffset: 0.1,
        rOffset: 0.1
      }
    } else if (['editor', 'preview'].includes(args.grid.name)) {
      params = {};
    }
    params.layer = layer;
    super( params, args );
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
    }
  }

  setWidth( width ){
    Entity.prototype.setWidth.call( this, width );
    if (this.grid.name === 'selection-hotbar') {this.selectionBackground.updateSize( this )};
  }

  setHeight( height ){
    Entity.prototype.setHeight.call( this, height );
    if (this.grid.name === 'selection-hotbar') {this.selectionBackground.updateSize( this )};
  }

  setCOffset( cOffset ){
    Entity.prototype.setCOffset.call( this, cOffset );
    if (this.grid.name === 'selection-hotbar') {this.selectionBackground.updateSize( this )};
  }

  setROffset( rOffset ){
    Entity.prototype.setROffset.call( this, rOffset );
    if (this.grid.name === 'selection-hotbar') {this.selectionBackground.updateSize( this )};
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
        this.cOffsetBeforeMove = this.cOffset;
        this.rOffsetBeforeMove = this.rOffset;
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
}