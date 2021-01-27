const Joi = require('@hapi/joi');

/**
 * @class
 * @classdesc Represents a Text. To create a Text use the Entity.addText function
 */
class Text {
  /**
   * @hideconstructor
   */
  constructor( textSettings ){
    this.id = textSettings.id;
    this.text = textSettings.text || "Text";
    this.size = textSettings.size || 1;
    this.color = textSettings.color || "black";
    this.fontFamily = textSettings.fontFamily || "arial";
    this.cOffset = textSettings.cOffset || 0;
    this.rOffset = textSettings.rOffset || 0;
  }
}
 /**
   * @typedef {Object} Text~textSettings
   * @property {string} id - Id of the text
   * @property {string} [text] - The actual text
   * @property {number} [size] - Height of the text in rows
   * @property {string} [color] - Color of the text (any stadard color format should work)
   * @property {string} [fontFamily] - FontFamily of the text
   * @property {number} [cOffset] - cOffset of the text
   * @property {number} [rOffset] - rOffset of the text
   */

/**
 * @classdesc Base class for all Entities. CustomEntityClasses (Childs of Entity) can be passed in with the grigaConfig when initializing Griga
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
      mouseEnterSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseLeaveSubscriptions: Joi.array().items(Joi.string()).default([]),
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
   * @param {string[]} [params.mouseEnterSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseEnter Event
   * @param {string[]} [params.mouseLeaveSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseLeave Event
   * @param {Object} args - The Object passed in to all CustomEntityClasses as second argument when constructed by the Griga Famework
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
     * @readonly
     * @type {number}
     */
    this.c = args.c;
    /**
     * @description The entities r position
     * @readonly
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
     * @readonly
     * @type {number}
     */
    this.width = validParams.width;
    /**
     * @description Displayed height of the entity in rows
     * @readonly
     * @type {number}
     */
    this.height = validParams.height;
    /**
     * @description Displayed cOffset of the entity in columns
     * @readonly
     * @type {number}
     */
    this.cOffset = validParams.cOffset;
    /**
     * @description Displayed rOffset of the entity in rows
     * @readonly
     * @type {number}
     */
    this.rOffset = validParams.rOffset;
    /**
     * @description Layer at which the the entity is displayed.
     * @readonly
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
     * @description Array of displayNames for which display the entity is subscribed to the mouseEnter Event
     * @readonly
     * @type {string[]}
     */
    this.mouseEnterSubscriptions = validParams.mouseEnterSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseLeave Event
     * @readonly
     * @type {string[]}
     */
    this.mouseLeaveSubscriptions = validParams.mouseLeaveSubscriptions;
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
    this.mouseEnterSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseEnter( this, displayName );
    } );
    this.mouseLeaveSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseLeave( this, displayName );
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

  /**
   * Returns the params object used by grid.getCurrentSceneData. Should be overwritten if you want to save params at grid.getCurrentSceneData
   * @returns {Object<string, *>}
   * @event
   */
  getCurrentParams() { //used to getCurrentSceneData
    return {}; 
  }

  /**
   * The Game Loop. Get's called before every render if the entity is subscribed to the renderStart Event. Should be overwritten to do dynamic motions/animations
   * @param {number} timePassed - Time passed since last render
   * @event
   */
  renderStartHandler( timePassed ){
    console.log( 'performance.now(): ' + performance.now() );
    console.log( 'timePassed: ' + timePassed );
  }
  
  /**
   * Get's called when all entities are loaded onto this.grid if the entity is subscribed to the sceneLoaded Event. Should be overwritten to execute inital code which requires the presence of all entities.
   * @event
   */
  sceneLoadedHandler(){
    console.log( this.constructor.name + ' is subscribed to the sceneLoadedEvent but doesn\'t use it' );
  }
  
  /**
   * Get's called when a key is pressed if the entity subscribed to the keyDown Event for that key. Should be overwritten to give controlls to the player
   * @param {string} key - The key property of the javascript keyDown Event
   * @event
   */
  keyDownHandler( key ){
    console.log( key );
  }
  /**
   * Get's called when a key is released if the entity subscribed to the keyUp Event for that key. Can be used in combination with keyDownHandler to treat keys as buttons
   * @param {string} key - The key property of the javascript keyUp Event
   * @event
   */
  keyUpHandler( key ){
    console.log( key );
  }

  /**
   * Get's called when a click occurs on a display if the entity subscribed to the mouseDown Event for that display. Should be overwritten to execute code on click
   * @param {string} displayName - Name of the display the mouseDown Event occured on
   * @param {number} mouseC - C-position of the mouseDown Event
   * @param {number} mouseR - R-position of the mouseDown Event
   * @event
   */
  mouseDownHandler( displayName, mouseC, mouseR, ctrlKey ){
    console.log( displayName, mouseC, mouseR, ctrlKey );
  }
  /**
   * Get's called when a click ends on a display if the entity subscribed to the mouseUp Event for that display. Should be overwritten to execute code on click-release
   * @param {string} displayName - Name of the display the mouseUp Event occured on
   * @param {number} mouseC - C-position of the mouseUp Event
   * @param {number} mouseR - R-position of the mouseUp Event
   * @event
   */
  mouseUpHandler( displayName, mouseC, mouseR, ctrlKey ){
    console.log( displayName, mouseC, mouseR, ctrlKey );
  }
  /**
   * Get's called when a mouseMove Event occurs on a display if the entity subscribed to the mouseMove Event for that display. Can be used for drag-and-drop in combination with mouseDown and mouseUp Events
   * @param {string} displayName - Name of the display the mouseMove Event occured on
   * @param {number} mouseC - C-position of the mouseMove Event
   * @param {number} mouseR - R-position of the mouseMove Event
   * @event
   */
  mouseMoveHandler( displayName, mouseC, mouseR ){
    console.log( displayName, mouseC, mouseR );
  }
  /**
   * Get's called when the mouse enters the tile the entity is in and the entity is subscribed to the mouseMove Event for that display. 
   * @param {string} displayName - Name of the display the mouseEnter Event occured on
   * @param {number} mouseC - C-position of the mouseEnter Event
   * @param {number} mouseR - R-position of the mouseEnter Event
   * @param {boolean} mousePressed - If the mouse is currently pressed down
   * @event
   */
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    console.log( displayName, mouseC, mouseR, mouseButtons, ctrlKey );
  }
  /**
   * Get's called when the mouse leaves the tile the entity is in and the entity is subscribed to the mouseLeave Event for that display. 
   * @param {string} displayName - Name of the display the mouseLeave Event occured on
   * @param {number} mouseC - C-position of the mouseLeave Event
   * @param {number} mouseR - R-position of the mouseLeave Event
   * @param {boolean} mousePressed - If the mouse is currently pressed down
   * @event
   */
  mouseLeaveHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    console.log( displayName, mouseC, mouseR, mouseButtons, ctrlKey );
  }

  //functions to use
  /**
   * Changes the layer of the entity
   * @param {number} newLayer - New layer the entity should be displayed on
   */
  changeLayer( newLayer ){
    this.grid.removeEntityInstanceFromLayerData( this );
    this.layer = newLayer;
    this.grid.addEntityInstanceToLayerData( this );
  }

  /**
   * Changes the displaySettings of this.grid on a display. Settings you don't specify stay the same
   * @param {string} displayName - Name of the display to change the gridDisplaySettings
   * @param {displaySettings} displaySettings - Object containing all displaySettings you wan't to change
   */
  changeGridDisplaySettings( displayName, displaySettings ){
    this.grid.displays[ displayName ].changeGridDisplaySettings( this.grid.name, displaySettings );
  }

  /**
   * Sets the entities cOffset property
   * @param {number} cOffset 
   */
  setCOffset( cOffset ){
    this.cOffset = cOffset;
  }
  
  /**
   * Sets the entities rOffset property
   * @param {number} rOffset 
   */
  setROffset( rOffset ){
    this.rOffset = rOffset;
  }

  /**
   * Sets the entities height property
   * @param {number} height 
   */
  setHeight( height ){
    this.height = height;
  }
  
  /**
   * Sets the entities width property
   * @param {number} width 
   */
  setWidth( width ){
    this.width = width;
  }

  /**
   * Deletes the entity
   */
  delete(){
    this.grid.deleteEntityInstance( this );
  }

  /**
   * Attaches the detached entity to the grid at (c, r)
   * @param {number} c - Column
   * @param {number} r - Row
   */
  attach( c, r ){
    if (!this.detached){ return console.warn('can\'t attach an already attached Entity') };

    this.detached = false;
    this.c = Math.round( c );
    this.r = Math.round( r );
    this.grid.attachEntityInstance( this );
  }

  /**
   * Detaches the attached entity. The position of the entity will stay the same
   */
  detach(){
    if (this.detached){ return console.warn('can\'t detach an already detached Entity') };
    this.detached = true;
    this.grid.detachEntityInstance( this );
  }

  /**
   * String containing a direction. Possible are: 'top','up','north'; 'right','east'; 'bottom','down','south'; 'left','west'; 'here','stay'. The directionString isn't case sensitive
   * @typedef {string} directionString
   */

  /**
   * Array of the form [dc, dr] representing a position relative to the entities current position.
   * @typedef {number[]} relativePosition
   */

  /**
   * Object of the form {c, r} representing an absolute position.
   * @typedef {Object} absolutePosition
   * @property {number} c
   * @property {number} r
   */

  /**
   * Turns any position into a absolutePosition
   * @param {directionString|relativePosition|absolutePosition} position
   * @param {string} [borderMode="ignore"] - what to do when the position is off the grid. Possible are: ignore, modulo
   * @returns {absolutePosition} absolutePosition
   */
  formatPositionAsAbsolutePosition( position, borderMode = 'ignore' ){
    let absPos = null;
    if (position.constructor === Array) {//rel. pos [dc, dr]
      absPos = {
        c: this.c + position[0],
        r: this.r + position[1],
    }
    } else if (typeof position === 'object') {//abs. coords {c, r}
      absPos = position;
    } else if (typeof position === 'string') {//direction string
      absPos = absPos = {c: this.c, r: this.r};
      if (['top','up','north'].includes( position.toLowerCase() )) {
        absPos.r--;
      } else if (['right','east'].includes( position.toLowerCase() )) {
        absPos.c++;
      } else if (['bottom','down','south'].includes( position.toLowerCase() )) {
        absPos.r++;
      } else if (['left','west'].includes( position.toLowerCase() )) {
        absPos.c--;
      } else if (['here','stay'].includes( position.toLowerCase() )) {
        //nothing
      }
    }

    if ( borderMode === 'modulo' ) {
      absPos.c = (absPos.c + this.grid.columns) % this.grid.columns;
      absPos.r = (absPos.r + this.grid.rows) % this.grid.rows;
    }

    return absPos;
  }

  /**
   * Moves entity to newPosition
   * @param {directionString|relativePosition|absolutePosition} newPosition - Where the entity should move to
   */
  move( newPosition ){
    newPosition = this.formatPositionAsAbsolutePosition( newPosition );
    if (this.detached){
      this.c = newPosition.c;
      this.r = newPosition.r;
    }
    else { this.grid.moveEntityInstance( this, newPosition ) };
  }

  /**
   * Adds a text to the entity
   * @param {Text~textSettings} textSettings 
   */
  addText( textSettings ){
    if (typeof textSettings !== 'object') {return console.error('textSettings needs to be an object')};
    if (textSettings.id === undefined) {return console.error('textSettings need to have an id property')};
    this.texts[ textSettings.id ] = new Text( textSettings );
  }
  /**
   * Removes a text from the entity
   * @param {string} id 
   */
  removeText( id ){
    delete this.texts[ id ];
  }

  /**
   * Returns an Array of all entities beneath this entity. Only works for detached entities
   * @returns {Entity~CustomEntityClass[]}
   */
  getEntityInstancesBeneath(){
    return this.grid.getEntityInstancesBeneathDetachedEntityInstance( this );
  }

  /**
   * Subscribes the Entity to the keyUp event for the specified key
   * @param {string} key - key
   */
  subscribeToKeyUp( key ){
    this.keyUpSubscriptions.push( key );
    this.grid.subscribeEntityInstanceToKeyUp( this, key );
  }
  /**
   * Unsubscribes the Entity from the keyUp event for the specified key
   * @param {string} key - key
   */
  unsubscribeFromKeyUp( key ){
    this.keyUpSubscriptions.splice( this.keyUpSubscriptions.indexOf( key ), 1 );
    this.grid.unsubscribeEntityInstanceFromKeyUp( this, key );
  }

  /**
   * Subscribes the entity to the renderStart event
   */
  subscribeToRenderStart(){
    this.renderStartSubscription = true;
    this.grid.subscribeEntityInstanceToRenderStart( this );
  }
  /**
   * Unsubscribes the entity from the renderStart event
   */
  unsubscribeFromRenderStart(){
    this.renderStartSubscription = false;
    this.grid.unsubscribeEntityInstanceFromRenderStart( this );
  }

  /**
   * Subscribes the entity to the mouseDown event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseDown( displayName ){
    this.mouseDownSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseDown( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseDown event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseDown( displayName ){
    this.mouseDownSubscriptions.splice( this.mouseDownSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseDown( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseUp event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseUp( displayName ){
    this.mouseUpSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseUp( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseUp event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseUp( displayName ){
    this.mouseUpSubscriptions.splice( this.mouseUpSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseUp( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseMove event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseMove( displayName ){
    this.mouseMoveSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseMove( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseMove event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseMove( displayName ){
    this.mouseMoveSubscriptions.splice( this.mouseMoveSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseMove( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseEnter event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseEnter( displayName ){
    this.mouseEnterSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseEnter( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseEnter event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseEnter( displayName ){
    this.mouseEnterSubscriptions.splice( this.mouseEnterSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseEnter( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseLeave event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseLeave( displayName ){
    this.mouseLeaveSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseLeave( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseLeave event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseLeave( displayName ){
    this.mouseLeaveSubscriptions.splice( this.mouseLeaveSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseLeave( this, displayName );
  }
}