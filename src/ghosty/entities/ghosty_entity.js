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

const MOVE_UP_SIZE_INCREASE_FACTOR = 16/14;
const VERTICAL_MOVE_DURATION = 100;
const MOVE_DURATION = 100;

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
    this.moveAnimationDirections = [];
    this.animationFunctions = {};
    this.animationStartTimes = {};
    this.currentAnimation = {};
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
    const params = {};
    if (this.widthMultiplier !== 1){ params.widthMultiplier = this.widthMultiplier };
    if (this.heightMultiplier !== 1){ params.heightMultiplier = this.heightMultiplier };
    if (this.layerAddend !== 0){ params.layerAddend = this.layerAddend };
    return params;
  }

  moveVertically( amount, jump = true ){
    this.addHeightMultiplier( Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, amount) );
    this.addWidthMultiplier( Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, amount) );
    this.addLayerAddend( amount*10 );
    this.addAnimationFunction('move',
      () => this.setVerticalMoveAnimationSize(),
      {targetWidth: this.basisWidth, targetHeight: this.basisHeight, jump}
    )
    this.setWidth( this.basisWidth * Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, -amount) );
    this.setHeight( this.basisHeight * Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, -amount) );
    const animationObject = this.animationFunctions['move'][ this.animationFunctions['move'].length-1 ];
    animationObject.startHeight = this.basisHeight;
    animationObject.startWidth = this.basisWidth;
  }

  addWidthMultiplier( multiplier ){
    this.widthMultiplier *= multiplier;
    this.setWidth( this.basisWidth );
  }

  addHeightMultiplier( multiplier ){
    this.heightMultiplier *= multiplier;
    this.setHeight( this.basisHeight );
  }

  addLayerAddend( addend ){
    this.layerAddend += addend;
    this.changeLayer( this.basisLayer );
  }

  setWidth( width ){
    this.basisWidth = width;
    Entity.prototype.setWidth.call( this, width*this.widthMultiplier);
    this.setCOffset( this.basisCOffset );
  }

  setHeight( height ){
    this.basisHeight = height;
    Entity.prototype.setHeight.call( this, height*this.heightMultiplier );
    this.setROffset( this.basisROffset );
  }

  setCOffset( cOffset ){
    this.basisCOffset = cOffset;
    Entity.prototype.setCOffset.call( this, cOffset + (1-this.width)/2 );
  }

  setROffset( rOffset ){
    this.basisROffset = rOffset;
    Entity.prototype.setROffset.call( this, rOffset + (1-this.height)/2 );
  }

  changeLayer( layer ){
    this.basisLayer = layer;
    Entity.prototype.changeLayer.call( this, layer + this.layerAddend );
  }

  move( direction) {
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const relPos = this.formatPositionAsRelativePosition(direction, 'modulo');
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
    this.griga.ghosty.play.keyTrackEntity.addTilesToUpdate( [absPos, {c:this.c, r:this.r}] );
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
    this.setCOffset( this.basisCOffset - relPos[0] );
    this.setROffset( this.basisROffset - relPos[1] );
    this.addAnimationFunction( 'move',
      () => this.setMoveAnimationOffset(),
      {relMoveDirection: relPos, targetTileAbsPos: absPos} );
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

  addAnimationFunction( category, fnc, valuesForAnimationObject = {} ){
    if (this.animationFunctions[category]) {
      this.animationFunctions[category].push(
        Object.assign( {fnc}, valuesForAnimationObject )
      );
    } else {
      this.animationFunctions[category] = [Object.assign(
        {fnc,startTime: performance.now()},
        valuesForAnimationObject
      )];
    }
    if (!this.renderStartSubscription) {
      this.subscribeToRenderStart();
    }
  }

  removeAnimationFunction( category, durationOfLastAnimation ){
    if (this.animationFunctions[category].length === 1) {
      delete this.animationFunctions[category];
    } else {
      const oldStartTime = this.animationFunctions[category][0].startTime;
      this.animationFunctions[category].splice(0,1);
      const newAnimationObject = this.animationFunctions[category][0];
      newAnimationObject.startTime = oldStartTime + durationOfLastAnimation;
      newAnimationObject.fnc();
    }
    if (Object.keys(this.animationFunctions).length === 0) {
      this.unsubscribeFromRenderStart();
    }
    if (!this.animationFunctions[category]) {
      this.animationChainEmptied(category);
    }
  }

  moveOffsetFunction( timeSinceAnimationStart ){
    const offset = 1 - Math.sqrt( timeSinceAnimationStart/MOVE_DURATION );
    // const offset = 1 - timeSinceAnimationStart/MOVE_DURATION
    return offset;
  }

  setMoveAnimationOffset(){
    const animationObject = this.animationFunctions['move'][0];
    const timeSinceAnimationStart = performance.now() - animationObject.startTime;
    const relTargetPosition = this.formatPositionAsRelativePosition( animationObject.targetTileAbsPos );
    let absOffset = this.moveOffsetFunction( timeSinceAnimationStart, MOVE_DURATION );
    absOffset = Math.max(absOffset, 0);
    this.setCOffset( relTargetPosition[0] - absOffset * animationObject.relMoveDirection[0] );
    this.setROffset( relTargetPosition[1] - absOffset * animationObject.relMoveDirection[1] );
    if (timeSinceAnimationStart > MOVE_DURATION) {
      this.removeAnimationFunction('move', MOVE_DURATION);
    }
  }

  verticalMoveSizeFunction( timeSinceAnimationStart ){
    const animationObject = this.animationFunctions['move'][0];
    const x = timeSinceAnimationStart/VERTICAL_MOVE_DURATION
    let percentComplete = x*x;
    if (animationObject.jump) {
      percentComplete = 4*x*(x-0.75);
    }
    const width = animationObject.startWidth*(1-percentComplete)
                + animationObject.targetWidth*(percentComplete);
    const height = animationObject.startHeight*(1-percentComplete)
                 + animationObject.targetHeight*(percentComplete);;
    return [ width, height ];
  }

  setVerticalMoveAnimationSize() {
    const animationObject = this.animationFunctions['move'][0];
    const timeSinceAnimationStart = performance.now() - animationObject.startTime;
    let [ width, height ] = this.verticalMoveSizeFunction( timeSinceAnimationStart );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
      [ width, height ] = [ animationObject.targetWidth, animationObject.targetHeight ];
    }
    this.setWidth( width );
    this.setHeight( height );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
      this.removeAnimationFunction('move', VERTICAL_MOVE_DURATION);
    }
  }

  renderStartHandler(){
    Object.values(this.animationFunctions).forEach(
      fncArr => fncArr[0].fnc()
    );
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

  animationChainEmptied( category ){
    //doSomething
  }

  //updateState(){ //doSomething }; //commented out to save on performance since the function only gets called if it exists
}