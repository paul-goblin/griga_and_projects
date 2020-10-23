const Joi = require('@hapi/joi');

class Text {
  constructor( id, text, size, color, fontFamily, cOffset, rOffset ){
    this.id = id;
    this.text = text || "Text";
    this.size = size || 1;
    this.color = color || "black";
    this.fontFamily = fontFamily || "arial";
    this.cOffset = cOffset || 0;
    this.rOffset = rOffset || 0;
  }
}
/**
 * Base class for all Entities. CustomEntityClasses (Childs of Entity) can be passed in with the grigaConfig when initializing Griga
 */
export class Entity {
  //images

  /**
   * @description Defines name and source of all Images the Entity can use as costume. Should be overwritten by CustomEntityClasses
   * @static
   * @type {Object<string, string>}
   */
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

  /**
   * Inits Entity. Should only be called with super() from a child class
   * @param {Object} params - EntityParams.
   * @param {number} [params.width = 1] - Displayed width of the entity in columns
   * @param {number} [params.height = 1] - Displayed height of the entity in rows.
   * @param {number} [params.cOffset = 0] - Displayed cOffset of the entity in columns.
   * @param {number} [params.rOffset = 0] - Displayed rOffset of the entity in rows.
   * @param {number} [params.layer = 0] - Layer at which the the entity is displayed.
   * @param {boolean} [params.renderStartSubscription = false] - True to subscribe the entity to the renderStart Event
   * @param {boolean} [params.sceneLoadedSubscription = false] - True to subscribe the entity to the sceneLoaded Event
   * @param {string[]} [params.keyDownSubscriptions = []] - Array of keys for which the entity subscribes to the keyDown Event
   * @param {string[]} [params.keyUpSubscriptions = []] - Array of keys for which the entity subscribes to the keyUp Event
   * @param {string[]} [params.mouseDownSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseDown Event
   * @param {string[]} [params.mouseUpSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseUp Event
   * @param {string[]} [params.mouseMoveSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseMove Event
   * @param {Object} args - The Object passed in to all childs of Entity as second argument when constructed by the Griga Famework
   */
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
    /**
     * @description The entities c position
     * @type {number}
     */
    this.c = args.c;
    /**
     * @description The entities r position
     * @type {number}
     */
    this.r = args.r;
    /**
     * @description True, if entity is detached
     * @readonly
     * @type {boolean}
     */
    this.detached = args.detached;
    /**
     * @description Displayed width of the entity in columns
     * @type {number}
     */
    this.width = validParams.width;
    /**
     * @description Displayed height of the entity in rows
     * @type {number}
     */
    this.height = validParams.height;
    /**
     * @description Displayed cOffset of the entity in columns
     * @type {number}
     */
    this.cOffset = validParams.cOffset;
    /**
     * @description Displayed rOffset of the entity in rows
     * @type {number}
     */
    this.rOffset = validParams.rOffset;
    /**
     * @description Layer at which the the entity is displayed.
     * @type {number}
     */
    this.layer = validParams.layer;
    /**
     * @description True if the entity is subscribed to the renderStart Event
     * @readonly
     * @type {boolean}
     */
    this.renderStartSubscription = validParams.renderStartSubscription;
    /**
     * @description True if the entity is subscribed to the sceneLoaded Event
     * @readonly
     * @type {boolean}
     */
    this.sceneLoadedSubscription = validParams.sceneLoadedSubscription;
    /**
     * @description Array of keys for which the entity is subscribed to the keyDown Event
     * @readonly
     * @type {string[]}
     */
    this.keyDownSubscriptions = validParams.keyDownSubscriptions;
    /**
     * @description Array of keys for which the entity is subscribed to the keyUp Event
     * @readonly
     * @type {string[]}
     */
    this.keyUpSubscriptions = validParams.keyUpSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseDown Event
     * @readonly
     * @type {string[]}
     */
    this.mouseDownSubscriptions = validParams.mouseDownSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseUp Event
     * @readonly
     * @type {string[]}
     */
    this.mouseUpSubscriptions = validParams.mouseUpSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseMove Event
     * @readonly
     * @type {string[]}
     */
    this.mouseMoveSubscriptions = validParams.mouseMoveSubscriptions;
    /**
     * @description The grid the entity is in
     * @readonly
     * @type {Grid}
     */
    this.grid = args.grid;
    /**
     * @description The griga the entity is in
     * @readonly
     * @type {Griga}
     */
    this.griga = this.grid.griga;

    /**
     * @description Name of the entitie's current image. Should be set by all entities
     * @type {string}
     */
    this.currentImage = 'default';
    /**
     * @description Contains all texts of the entity. The text's id is used as key
     * @readonly
     * @type {Object<string, Text>}
     */
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

  /**
   * Moves attached entityInstance on this.grid
   * @param {string} to - Direction-string, relative-position [dc, dr], or absolute-position Object {c, r}
   */
  move( to ){
    this.grid.moveEntityInstance( this, to );
  }

  addText( id, text, size, color, fontFamily, cOffset, rOffset ){
    this.texts[ id ] = new Text( id, text, size, color, fontFamily, cOffset, rOffset );
  }

  removeText( id ){
    delete this.texts[ id ];
  }

  getEntityInstancesBeneath(){
    return this.grid.getEntityInstancesBeneathDetachedEntityInstance( this );
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