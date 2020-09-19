import Joi from "@hapi/joi";

export class Grid {
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

  mouseMoveHandler( displayName, mouseC,mouseR ){
    //update this.mouse
    this.mouse.displayName = displayName;
    this.mouse.c = mouseC;
    this.mouse.r = mouseR;

    if (this.mouseMoveSubscriptions.hasOwnProperty( this.mouse.displayName )) {
      this.mouseMoveSubscriptions[ this.mouse.displayName ].forEach( entityInstance => {
        entityInstance.mouseMoveHandler( this.mouse.displayName, this.mouse.c, this.mouse.r );
      } );
    }
  }

  mouseLeaveHandler(){
    this.resetMouse();
  }

  mouseDownHandler( e ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseDownSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseDownHandler( this.mouse.displayName, this.mouse.c, this.mouse.r );
      }
    } );
  }
  mouseUpHandler( e ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseUpSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseUpHandler( this.mouse.displayName, this.mouse.c, this.mouse.r );
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

  detachEntityInstance( entityInstance ){
    this.removeEntityInstanceFromGridData( entityInstance );
    this.addEntityInstanceToDetachedData( entityInstance );
  }

//PUBLIC xD

  getAbsPos( startC, startR, direction ){
    const absPos = {c: startC, r: startR};
    if (['top','up'].includes( direction.toLowerCase() )) {
      absPos.r--;
    } else if (['right'].includes( direction.toLowerCase() )) {
      absPos.c++;
    } else if (['bottom','down'].includes( direction.toLowerCase() )) {
      absPos.r++;
    } else if (['left'].includes( direction.toLowerCase() )) {
      absPos.c--;
    } else if (['here','stay'].includes( direction.toLowerCase() )) {
      //nothing
    }
    return absPos;
  }

  static get argsSchema(){
    return Joi.object( {
      detached: Joi.boolean().default(false),
      c: Joi.number().default(0),
      r: Joi.number().default(0)
    } );
  }

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

  deleteEntityInstance( entityInstance ){
    //remove all references to entityInstance
    this.removeEntityInstanceFromAllEntityInstances( entityInstance )
    this.removeEntityInstanceFromEntityData( entityInstance );
    if (entityInstance.type === 'detached') {
      this.removeEntityInstanceFromDetachedData( entityInstance );
    } else if (entityInstance.type === 'tile'){
      this.removeEntityInstanceFromGridData( entityInstance );
    }
    this.removeEntityInstanceFromLayerData( entityInstance );
    entityInstance.keyDownSubscriptions.forEach( key => {
      this.unsubscribeEntityInstanceFromKeyDown( entityInstance, key );
    } );
  }

  moveEntityInstance( entityInstance, to ){
    //get newPos from to argument
    let newPos = null;
    if (typeof to === 'object') {//abs. coords {c, r}
      newPos = to;
    } else if (typeof to === 'array') {//rel. pos [c, r]
      newPos = {
        c: entityInstance.c + to[0],
        r: entityInstance.r + to[1],
      }
    } else if (typeof to === 'string') {//direction string
      newPos = this.getAbsPos( entityInstance.c, entityInstance.r, to );
    }
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

  //detached collision
  getDetachedEntityInstancesByCoordinates( c, r ){
    const entityInstances = this.detachedData.filter( entityInstance => {
      return (c > entityInstance.c && c < entityInstance.c+entityInstance.width
        && r > entityInstance.r && r < entityInstance.r+entityInstance.height);
    } );
    return entityInstances;
  }

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

  //sceneStuff
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
  }

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
        sceneData.tiles[c][r] = tileData.map( entityInstance => {
          return [entityInstance.constructor.name, entityInstance.getCurrentParams()];
        } );
      } );
    } );
    return sceneData;
  }

  resetMouse(){
    this.mouse = {
      displayName: null,
      down: false,
      c: 0, r: 0,
    };
  }
}