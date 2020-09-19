const Joi = require('@hapi/joi');

class Text {
  constructor( id, text, size, cOffset, rOffset ){
    this.id = id;
    this.text = text || "Text";
    this.size = size || 1;
    this.cOffset = cOffset || 0;
    this.rOffset = rOffset || 0;
  }
}

export class Entity {
  //images
  static get imgSources(){
    return { default: '' };
  }

  static loadImages( loadedCallback ) {
    //"this" refers to the specific entity class inheriting from "Entity"
    this.images = {};
    for (let [imageName, src] of Object.entries( this.imgSources )) {
      const img = this.images[imageName] = document.createElement('img');
      img.onload = loadedCallback;
      img.onerror = loadedCallback;
      img.src = src;
    }
  }

  //paramsSchema
  static get paramsSchema(){
    return Joi.object( {
      width: Joi.number().default(1),
      height: Joi.number().default(1),
      cOffset: Joi.number().default(0),
      rOffset: Joi.number().default(0),
      layer: Joi.number().integer().default(0),
      renderStartSubscription: Joi.bool().default(false),
      sceneLoadedSubscription: Joi.bool().default(false),
      keyDownSubscriptions: Joi.array().items(Joi.string()).default([]),
      keyUpSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseDownSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseUpSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseMoveSubscriptions: Joi.array().items(Joi.string()).default([]),
    } );
  }

  //constructor
  constructor( params, args ){
    //validate Params
    let validParams;
    try {
      validParams = Joi.attempt( params, Entity.paramsSchema );
    }
    catch (e) {
      e.name = 'GrigaEntityParamsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }

    //set Properties
    this.c = args.c;
    this.r = args.r;
    this.detached = args.detached;
    this.width = validParams.width;
    this.height = validParams.height;
    this.cOffset = validParams.cOffset;
    this.rOffset = validParams.rOffset;
    this.layer = validParams.layer;
    this.renderStartSubscription = validParams.renderStartSubscription;
    this.sceneLoadedSubscription = validParams.sceneLoadedSubscription;
    this.keyDownSubscriptions = validParams.keyDownSubscriptions;
    this.keyUpSubscriptions = validParams.keyUpSubscriptions;
    this.mouseDownSubscriptions = validParams.mouseDownSubscriptions;
    this.mouseUpSubscriptions = validParams.mouseUpSubscriptions;
    this.mouseMoveSubscriptions = validParams.mouseMoveSubscriptions;
    this.grid = args.grid;
    this.griga = this.grid.griga;

    this.currentImage = 'default';
    this.texts = {};

    //initialise EventSubscriptions
    if (this.renderStartSubscription) {
      this.grid.subscribeEntityInstanceToRenderStart( this );
    }
    if (this.sceneLoadedSubscription) {
      this.grid.subscribeEntityInstanceToSceneLoaded( this );
    }
    this.keyDownSubscriptions.forEach( key => {
      this.grid.subscribeEntityInstanceToKeyDown( this, key );
    } );
    this.keyUpSubscriptions.forEach( key => {
      this.grid.subscribeEntityInstanceToKeyUp( this, key );
    } );
    this.mouseDownSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseDown( this, displayName );
    } );
    this.mouseUpSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseUp( this, displayName );
    } );
    this.mouseMoveSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseMove( this, displayName );
    } );
  }

  //called at every Render
  get displayData() {
    return {
      img: this.constructor.images[ this.currentImage ],
      pos : this.computedPos,
      width: this.width,
      height: this.height,
      texts: this.texts,
    }
  }

  get computedPos() {
    const pos = {};
    pos.c = this.c + this.cOffset;
    pos.r = this.r + this.rOffset;
    return pos;
  }

  //functions to override
  getCurrentParams() { //used to getCurrentSceneData
    return {}; 
  }

  renderStartHandler( timePassed ){
    console.log( 'performance.now():' + performance.now() );
    console.log( 'timePassed:' + timePassed );
  }
  
  sceneLoadedHandler(){
    console.log( this.constructor.name + ' is subscribed to the sceneLoadedEvent but doesn\'t use it' );
  }
  
  keyDownHandler( key ){
    console.log( key );
  }

  keyUpHandler( key ){
    console.log( key );
  }

  mouseDownHandler( displayName, mouseC, mouseR ){
    console.log( displayName, mouseC, mouseR );
  }

  mouseUpHandler( displayName, mouseC, mouseR ){
    console.log( displayName, mouseC, mouseR );
  }

  mouseMoveHandler( displayName, mouseC, mouseR ){
    console.log( displayName, mouseC, mouseR );
  }

  //functions to use
  changeLayer( newLayer ){
    this.grid.removeEntityInstanceFromLayerData( this );
    this.layer = newLayer;
    this.grid.addEntityInstanceToLayerData( this );
  }

  changeGridDisplaySettings( display, displaySettings ){
    this.grid.displays[ display ].changeGridDisplaySettings( this.grid.name, displaySettings );
  }

  delete(){
    this.grid.deleteEntityInstance( this );
  }

  attach( c, r ){
    if (!this.detached){ return console.warn('can\'t attach an already attached Entity') };

    this.detached = false;
    this.c = Math.round( c );
    this.r = Math.round( r );
    this.grid.attachEntityInstance( this );
  }

  detach(){
    if (this.detached){ return console.warn('can\'t detach an already detached Entity') };
    this.detached = true;
    this.grid.detachEntityInstance( this );
  }

  move( to ){
    this.grid.moveEntityInstance( this, to );
  }

  addText( id, text, size, rOffset, cOffset ){
    this.texts[ id ] = new Text( id, text, size, rOffset, cOffset );
  }

  removeText( id ){
    delete this.texts[ id ];
  }

  subscribeToKeyUp( key ){
    this.keyUpSubscriptions.push( key );
    this.grid.subscribeEntityInstanceToKeyUp( this, key );
  }
  unsubscribeFromKeyUp( key ){
    this.keyUpSubscriptions.splice( this.keyUpSubscriptions.indexOf( key ), 1 );
    this.grid.unsubscribeEntityInstanceFromKeyUp( this, key );
  }

  subscribeToRenderStart(){
    this.renderStartSubscription = true;
    this.grid.subscribeEntityInstanceToRenderStart( this );
  }
  unsubscribeFromRenderStart(){
    this.renderStartSubscription = false;
    this.grid.unsubscribeEntityInstanceFromRenderStart( this );
  }

  subscribeToMouseUp( displayName ){
    this.mouseUpSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseUp( this, displayName );
  }
  unsubscribeFromMouseUp( displayName ){
    this.mouseUpSubscriptions.splice( this.mouseUpSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseUp( this, displayName );
  }

  subscribeToMouseMove( displayName ){
    this.mouseMoveSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseMove( this, displayName );
  }
  unsubscribeFromMouseMove( displayName ){
    this.mouseMoveSubscriptions.splice( this.mouseMoveSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseMove( this, displayName );
  }
}