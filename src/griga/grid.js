import Joi from "@hapi/joi";

/**
 * Class representing a logical grid. Saves references to entities
 */
export class Grid {
  /**
   * Creates a Grid
   * Grids should only be constructed using the griga config
   * @hideconstructor
   */
  constructor( config, griga ){
    this.griga = griga;
    this.displays = {};
    this.name = config.name;
    this.columns = config.columns;
    this.rows = config.rows;

    this.resetMouse(); //sets this.mouse to default

    //entityInstanceReferences
    this.clearScene();

    this.lastRenderTime = 0;
  }

  //setup
  setupGridData(){
    const gridData = [];
    for (let c=0; c<this.columns; c++) {
      gridData[c] = [];
      for (let r=0; r<this.rows; r++) {
        gridData[c][r] = [];
      }
    }
    return gridData;
  }

  //handler
  renderStartHandler(){
    const timePassed = performance.now() - this.lastRenderTime;
    this.lastRenderTime = performance.now();
    this.renderStartSubscriptions.forEach( entityInstance => {
      entityInstance.renderStartHandler( timePassed );
    } );
  }
  
  sceneLoadedHandler(){
    this.sceneLoadedSubscriptions.forEach( entityInstance => {
      entityInstance.sceneLoadedHandler();
    } );
  }
  
  keyDownHandler( e ){
    if (this.keyDownSubscriptions.hasOwnProperty( e.key )) {
      this.keyDownSubscriptions[ e.key ].forEach( entityInstance => {
        entityInstance.keyDownHandler( e.key );
      } );
    }
  }

  keyUpHandler( e ){
    if (this.keyUpSubscriptions.hasOwnProperty( e.key )) {
      this.keyUpSubscriptions[ e.key ].forEach( entityInstance => {
        entityInstance.keyUpHandler( e.key );
      } );
    }
  }

  mouseMoveHandler( displayName, mouseC,mouseR, mouseButtons, ctrlKey ){
    //check for mouse enter TODO
    let movedToNewTile = false;
    if (Math.floor(this.mouse.c) !== Math.floor(mouseC)
     || Math.floor(this.mouse.r) !== Math.floor(mouseR)) {
      movedToNewTile = true;
    }

    if (movedToNewTile) {
      //fire mouse Leave Event
      const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)]
      targets.forEach( entityInstance => {
        if (entityInstance.mouseLeaveSubscriptions.includes( this.mouse.displayName )) {
          entityInstance.mouseLeaveHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, mouseButtons, ctrlKey );
        }
      } );
    }
    
    //update this.mouse
    this.mouse.displayName = displayName;
    this.mouse.c = mouseC;
    this.mouse.r = mouseR;

    if (movedToNewTile) {
      //fire mouse Enter Event
      const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)]
      targets.forEach( entityInstance => {
        if (entityInstance.mouseEnterSubscriptions.includes( this.mouse.displayName )) {
          entityInstance.mouseEnterHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, mouseButtons, ctrlKey );
        }
      } );
    }

    if (this.mouseMoveSubscriptions.hasOwnProperty( this.mouse.displayName )) {
      this.mouseMoveSubscriptions[ this.mouse.displayName ].forEach( entityInstance => {
        entityInstance.mouseMoveHandler( this.mouse.displayName, this.mouse.c, this.mouse.r );
      } );
    }
  }

  mouseLeaveHandler(){
    this.resetMouse();
  }

  mouseDownHandler( displayName, ctrlKey ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseDownSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseDownHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, ctrlKey );
      }
    } );
  }
  mouseUpHandler( displayName, ctrlKey ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseUpSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseUpHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, ctrlKey );
      }
    } );
  }

  //listenerStuff
  
  subscribeEntityInstanceToRenderStart( entityInstance ){
    this.renderStartSubscriptions.push( entityInstance );
  }
  unsubscribeEntityInstanceFromRenderStart( entityInstance ){
    const i = this.renderStartSubscriptions.indexOf( entityInstance );
    this.renderStartSubscriptions.splice( i, 1 );
  }
  
  subscribeEntityInstanceToSceneLoaded( entityInstance ){
    this.sceneLoadedSubscriptions.push( entityInstance );
  }
  
  subscribeEntityInstanceToKeyDown( entityInstance, key ){
    if (this.keyDownSubscriptions.hasOwnProperty( key )) {
      this.keyDownSubscriptions[key].push( entityInstance );
    } else {
      this.keyDownSubscriptions[key] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromKeyDown( entityInstance, key ){
    const i = this.keyDownSubscriptions[key].indexOf( entityInstance );
    this.keyDownSubscriptions[key].splice( i, 1 );
  }

  subscribeEntityInstanceToKeyUp( entityInstance, key ){
    if (this.keyUpSubscriptions.hasOwnProperty( key )) {
      this.keyUpSubscriptions[key].push( entityInstance );
    } else {
      this.keyUpSubscriptions[key] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromKeyUp( entityInstance, key ){
    const i = this.keyUpSubscriptions[key].indexOf( entityInstance );
    this.keyUpSubscriptions[key].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseDown( entityInstance, displayName ){
    if (this.mouseDownSubscriptions.hasOwnProperty( displayName )) {
      this.mouseDownSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseDownSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseDown( entityInstance, displayName ){
    const i = this.mouseDownSubscriptions[displayName].indexOf( entityInstance );
    this.mouseDownSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseUp( entityInstance, displayName ){
    if (this.mouseUpSubscriptions.hasOwnProperty( displayName )) {
      this.mouseUpSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseUpSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseUp( entityInstance, displayName ){
    const i = this.mouseUpSubscriptions[displayName].indexOf( entityInstance );
    this.mouseUpSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseMove( entityInstance, displayName ){
    if (this.mouseMoveSubscriptions.hasOwnProperty( displayName )) {
      this.mouseMoveSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseMoveSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseMove( entityInstance, displayName ){
    const i = this.mouseMoveSubscriptions[displayName].indexOf( entityInstance );
    this.mouseMoveSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseEnter( entityInstance, displayName ){
    if (this.mouseEnterSubscriptions.hasOwnProperty( displayName )) {
      this.mouseEnterSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseEnterSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseEnter( entityInstance, displayName ){
    const i = this.mouseEnterSubscriptions[displayName].indexOf( entityInstance );
    this.mouseEnterSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseLeave( entityInstance, displayName ){
    if (this.mouseLeaveSubscriptions.hasOwnProperty( displayName )) {
      this.mouseLeaveSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseLeaveSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseLeave( entityInstance, displayName ){
    const i = this.mouseLeaveSubscriptions[displayName].indexOf( entityInstance );
    this.mouseLeaveSubscriptions[displayName].splice( i, 1 );
  }

  //display interactions
  get displayData(){
    //triggerRenderStartEvent
    this.renderStartHandler();
    const allLayersEntityInstanceDisplayData = [];
    this.layerData.forEach( ( layerEntityInstances, layer ) => {
      const layerEntityInstanceDisplayData = [];
      layerEntityInstances.forEach( entityInstance => {
        layerEntityInstanceDisplayData.push( entityInstance.displayData );
      } );
      allLayersEntityInstanceDisplayData[ layer ] = layerEntityInstanceDisplayData;
    } );
    return {
      gridName: this.name,
      allLayersEntityInstanceDisplayData
    };
  }
  
  //allEntityInstances
  addEntityInstanceToAllEntityInstances( entityInstance ){
    this.allEntityInstances.push( entityInstance );
  }
  removeEntityInstanceFromAllEntityInstances( entityInstance ){
    const entityInstanceIndex = this.allEntityInstances.indexOf( entityInstance );
    this.allEntityInstances.splice( entityInstanceIndex, 1 );
  }

  //entityData
  addEntityInstanceToEntityData( entityInstance ){
    const entityName = entityInstance.constructor.name;
    if (this.entityData.hasOwnProperty( entityName )) {
      this.entityData[ entityName ].push( entityInstance );
    } else {
      this.entityData[ entityName ] = [ entityInstance ];
    }
  }
  removeEntityInstanceFromEntityData( entityInstance ){
    const entityName = entityInstance.constructor.name;
    const entityInstanceIndex = this.entityData[ entityName ].indexOf( entityInstance );
    this.entityData[ entityName ].splice( entityInstanceIndex, 1 );
    if (this.entityData[ entityName ].length === 0) {
      delete this.entityData[ entityName ];
    }
  }

  //detachedData
  addEntityInstanceToDetachedData( entityInstance ){
    this.detachedData.push( entityInstance );
  }
  removeEntityInstanceFromDetachedData( entityInstance ){
    const entityInstanceIndex = this.detachedData.indexOf( entityInstance );
    this.detachedData.splice( entityInstanceIndex, 1 );
  }

  //gridData
  addEntityInstanceToGridData( entityInstance ){
    const tileData = this.gridData[ entityInstance.c ][ entityInstance.r ];
    tileData.push( entityInstance );
  }
  removeEntityInstanceFromGridData( entityInstance ){
    const tileData = this.gridData[ entityInstance.c ][ entityInstance.r ];
    const entityInstanceIndex = tileData.indexOf( entityInstance );
    tileData.splice( entityInstanceIndex, 1 );
  }

  //layerData
  addEntityInstanceToLayerData( entityInstance ){
    let layerArray = [];
    if (this.layerData.has( entityInstance.layer )) {
      layerArray = this.layerData.get( entityInstance.layer );
    }
    layerArray.push( entityInstance );
    this.layerData.set( entityInstance.layer, layerArray );
  }
  removeEntityInstanceFromLayerData( entityInstance ){
    const layerArray = this.layerData.get( entityInstance.layer );
    const entityInstanceIndex = layerArray.indexOf( entityInstance );
    layerArray.splice( entityInstanceIndex, 1 );
    if (layerArray.length > 0) {
      this.layerData.set( entityInstance.layer, layerArray );
    } else {
      this.layerData.delete( entityInstance.layer );
    }
  }

  //only used by EntityMethods
  attachEntityInstance( entityInstance ){
    this.removeEntityInstanceFromDetachedData( entityInstance );
    this.addEntityInstanceToGridData( entityInstance );
  }

  //only used by EntityMethods
  detachEntityInstance( entityInstance ){
    this.removeEntityInstanceFromGridData( entityInstance );
    this.addEntityInstanceToDetachedData( entityInstance );
  }

//PUBLIC xD

  static get argsSchema(){
    return Joi.object( {
      detached: Joi.boolean().default(false),
      c: Joi.number().default(0),
      r: Joi.number().default(0)
    } );
  }

  /**
   * Constructs a new entity
   * @param {string} entityName - Name of the CustomEntityClass
   * @param {*} [params={}] - Params that will be passed in as first argument to the constructor of the CustomEntityClass
   * @param {Object} [args] - Arguments for the entities intial state. Can still be overwritten in the constructor of the CustomEntityClass before calling super()
   * @param {boolean} [args.detached=false] - True if the entity should be detached
   * @param {number} [args.c=0] - C position
   * @param {number} [args.r=0] - R position
   */
  newEntityInstance( entityName, params = {}, args = {} ){
    //validate Args
    let validArgs;
    try {
      validArgs = Joi.attempt( args, Grid.argsSchema );
    }
    catch (e) {
      e.name = 'newEntityArgsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    //create new entityInstance
    validArgs.grid = this;
    const entityInstance = new this.griga.entities[ entityName ](
      params, validArgs
    );
    //set all entityInstance References
    this.addEntityInstanceToAllEntityInstances( entityInstance );
    this.addEntityInstanceToEntityData( entityInstance );
    if (entityInstance.detached) {
      this.addEntityInstanceToDetachedData( entityInstance );
    } else{
      this.addEntityInstanceToGridData( entityInstance );
    }
    this.addEntityInstanceToLayerData( entityInstance );

    return entityInstance;
  }

  //only used by EntityMethods
  deleteEntityInstance( entityInstance ){
    //remove all references to entityInstance
    this.removeEntityInstanceFromAllEntityInstances( entityInstance )
    this.removeEntityInstanceFromEntityData( entityInstance );
    if (entityInstance.detached) {
      this.removeEntityInstanceFromDetachedData( entityInstance );
    } else{
      this.removeEntityInstanceFromGridData( entityInstance );
    }
    this.removeEntityInstanceFromLayerData( entityInstance );
    entityInstance.keyDownSubscriptions.forEach( key => {
      this.unsubscribeEntityInstanceFromKeyDown( entityInstance, key );
    } );
  }

  //only used by EntityMethods
  moveEntityInstance( entityInstance, newPos ){
    //validate newPos
    if (newPos.c >= 0 && newPos.c < this.columns
     && newPos.r >= 0 && newPos.r < this.rows) {
      //update entityPosition
      this.removeEntityInstanceFromGridData( entityInstance );
      entityInstance.c = newPos.c;
      entityInstance.r = newPos.r;
      this.addEntityInstanceToGridData( entityInstance );
    }
  }

  /**
   * Filters and returns all Entities matching the selectorObject
   * @param {Object} selectorObject - Object containing filter options
   * @param {absolutePosition} [selectorObject.tile] - Tile the entities need to be on
   * @param {string} [selectorObject.type] - The Name of the CustomEntityClass the entities should be an instance of
   * @param {string} [selectorObject.notType] - The Name of the CustomEntityClass the entities should not be an instance of
   */
  getEntityInstances( selectorObject = {} ){
    let entityInstances = this.allEntityInstances;
    if (selectorObject.hasOwnProperty('tile')) {
      if (selectorObject.tile.c >= 0 && selectorObject.tile.c < this.columns
       && selectorObject.tile.r >= 0 && selectorObject.tile.r < this.rows) { //coordinates inside grid
        entityInstances = this.gridData[ selectorObject.tile.c ][ selectorObject.tile.r ];
        if (selectorObject.hasOwnProperty('type')) {
          entityInstances = entityInstances.filter( entityInstance => {
            return entityInstance.constructor.name === selectorObject.type;
          } );
        }
      } else {
        entityInstances = [];
      }
    } else if (selectorObject.hasOwnProperty('type')) {
      entityInstances = this.entityData[ selectorObject.type ];
    }
    if (selectorObject.hasOwnProperty('notType')) {
      entityInstances = entityInstances.filter( entityInstance => {
        return entityInstance.constructor.name !== selectorObject.notType;
      } );
    }
    return entityInstances;
  }

  /**
   * gets all detached entities which are "under" the coordinates (c, r)
   * @param {number} c - C coordinate
   * @param {number} r - R coordinate
   */
  getDetachedEntityInstancesByCoordinates( c, r ){
    const entityInstances = this.detachedData.filter( entityInstance => {
      return (c > entityInstance.c && c < entityInstance.c+entityInstance.width
        && r > entityInstance.r && r < entityInstance.r+entityInstance.height);
    } );
    return entityInstances;
  }

  //only used by entity methods
  getEntityInstancesBeneathDetachedEntityInstance( detachedEntityInstance ){
    const startC = Math.floor( detachedEntityInstance.c );
    const endC = detachedEntityInstance.c + detachedEntityInstance.width;
    const startR = Math.floor( detachedEntityInstance.r );
    const endR = detachedEntityInstance.r + detachedEntityInstance.height;
    let entityInstances = [];
    for (let c = startC; c < endC; c++) {
      for (let r = startR; r < endR; r++) {
        if (c >= 0 && c < this.columns
         && r >= 0 && r < this.rows) {
          entityInstances = entityInstances.concat( this.gridData[c][r] );
        }
      }
    }
    return entityInstances;
  }

  /**
   * loads a scene into the grid
   * @param {Grid~sceneData} sceneData - SceneData Object
   */
  loadScene( sceneData ){
    //TODO detached

    //tiles
    sceneData.tiles.forEach( (cData, c) => {
      cData.forEach( (tileData, r) => {
        tileData.forEach( entityDeclaration => {
          const entityName = entityDeclaration[0];
          const params = entityDeclaration[1] || {};
          const args = { detached: false, c, r };
          this.newEntityInstance( entityName, params, args );
        } );
      } );
    } );
    //triggerSceneLoadedEvent
    this.sceneLoadedHandler();
  }

  /**
   * @typedef {Object} Grid~sceneData
   * @property {Array[]} detached - Array containing data for a detached entity
   * @property {string} detached.0 - Name of the CustomEntityClass
   * @property {any} detached.1 - Entity params
   * @property {Object} detached.2 - Position of the detached Entity
   * @property {number} [detached.2.c=0] - C position
   * @property {number} [detached.2.r=0] - R position
   * @property {Array[][]} attached - Array inside a 2D array representing all [c, r] tiles on the grid containing data for an attached entity
   * @property {string} attached.0 - Name of the CustomEntityClass
   * @property {any} attached.1 - Entity params
   */

  /**
   * clears the Scene, all entites get deleted
   */
  clearScene(){
    this.allEntityInstances = [];
    this.entityData = {};
    this.gridData = this.setupGridData();
    this.detachedData = [];
    this.layerData = new Map();

    this.renderStartSubscriptions = [];
    this.sceneLoadedSubscriptions = [];
    this.keyDownSubscriptions = {};
    this.keyUpSubscriptions = {};
    this.mouseDownSubscriptions = {};
    this.mouseUpSubscriptions = {};
    this.mouseMoveSubscriptions = {};
    this.mouseEnterSubscriptions = {};
    this.mouseLeaveSubscriptions = {};
  }

  /**
   * gets the current state of the grid as sceneData. If you have entites which should save parameters in the sceneData, use (overwrite) the getCurrentParams method of Entity. If you have Entities which shouldn't be included in the sceneData, overwrite ther includeInSceneData Method to return false;
   * @returns {Grid~sceneData}
   */
  getCurrentSceneData(){
    const sceneData = {
      detached: [],
      tiles: []
    }
    //detached

    //tiles
    this.gridData.forEach( (cData, c) => {
      sceneData.tiles.push([]);
      cData.forEach( (tileData, r) => {
        sceneData.tiles[c][r] = tileData.filter( e => e.includeInSceneData() ).map( entityInstance => {
          return [entityInstance.constructor.name, entityInstance.getCurrentParams()];
        } );
      } );
    } );
    return sceneData;
  }

  //only used by grid mouse event xD
  resetMouse(){
    this.mouse = {
      displayName: null,
      down: false,
      c: 0, r: 0,
    };
  }
}