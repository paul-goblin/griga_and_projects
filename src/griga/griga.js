/**
 * Griga
 * @version 1.0.0
 * @author Tom Kopolt
 * paul-goblin on GitHub
 */

import { Display } from './display';
import { Grid } from './grid';

const Joi = require('@hapi/joi');

const wrapperIdExists = (wrapperId) => {
  const wrapper = document.getElementById(wrapperId);
  if (wrapper) {return wrapperId};
  throw new Error(`there's no HTML-Element with wrapperId ${wrapperId}`);
}
/**
 * Class representing a Complete Game, including Logic and Graphics
 */
export class Griga {

  //configSchema
  static get configSchema(){
    return Joi.object( {
      //displays
      displays: Joi.array().items( Joi.object( {
          name: Joi.string().required(),
          wrapperId: Joi.any().required().custom( wrapperIdExists, 'wrapperId validation' ),
          widthHeightRatio: Joi.number().default(1),//in (fraction of responsive tileWidth), 1 for square
      } ) ),
      //grids
      grids: Joi.array().items( Joi.object( {
        name: Joi.string().required(),
        columns: Joi.number().integer().default(1),
        rows: Joi.number().integer().default(1),
    } ) ),
      //entities
      entities: Joi.array().items( Joi.function().class() ).required(), //no good validation yet
    } );
  }

  static get displaySettingsSchema(){
    return Joi.object( {
      top: Joi.number().default(0),
      left: Joi.number().default(0),
      width: Joi.number().min(0).default(1),
      height: Joi.number().min(0).default(1),
      columnsOnScreen: Joi.number().min(1).default(1),
      rowsOnScreen: Joi.number().min(1).default(1),
      columnShift: Joi.number().default(0),
      rowShift: Joi.number().default(0),
    } );
  }

  /**
   * @callback Griga~imagesLoadedCallback
   * @param {Griga} griga - The Griga instance 
   */

  /**
   * @typedef {Object} Entity~CustomEntityClass - Custom Classes extending Entity
   */

  /**
   * 
   * @param {Object} config - The griga config object
   * @param {Object[]} config.displays - Array of display setting objects. For each object Griga creates a corresponding display
   * @param {string} config.displays[].name - Name of the display
   * @param {string} config.displays[].wrapperId - Id of the HTML element used as display
   * @param {number} [config.displays[].widthHeightRatio=1] - The display's height relative to its width
   * @param {Object[]} config.grids - Array of grid setting objects. For each object Griga creates a corresponding grid
   * @param {string} config.grids[].name - Name of the grid
   * @param {number} [config.grids[].columns=1] - Number of columns
   * @param {number} [config.grids[].rows=1] - Number of rows
   * @param {Entity~CustomEntityClass[]} config.entities - Array of all CustomEntityClasses Griga should use
   * @param {Griga~imagesLoadedCallback} cb - The callback triggers when all the Images are Loaded
   */
  constructor( config, imagesLoadedCallback ){
    //validate Config
    let validConfig;
    try {
      validConfig = Joi.attempt( config, Griga.configSchema );
    }
    catch (e) {
      e.name = 'GrigaConfigError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    //declare all variables
    /**
     * @description Contains references to all displays. The display's name is used as key
     * @public
     * @member {Object.<string, Display>}
     */
    this.displays = this.setupDisplays( validConfig.displays );
    /**
     * @description Contains references to all grids. The grids's name is used as key
     * @public
     * @member {Object.<string, Grid>}
     */
    this.grids = this.setupGrids( validConfig.grids );
    /**
     * @description Contains references to all CustomEntityClasses. The entitie's name is used as key
     * @public
     * @member {Object.<string, Entity~CustomEntityClass>}
     */
    this.entities = Object.fromEntries( validConfig.entities.map(
      entity => [entity.name, entity]
    ) );

    /**
     * @description List of all Keys which are currently pressed on the keyboard
     * @public
     * @member {string[]}
     */
    this.keysPressed = [];

    this.setupEventListeners();

    //loadImages
    this.imagesLoadedCallback = imagesLoadedCallback;
    this.loadImages();
    requestAnimationFrame( () => this.render() );
  }

  //setup
  setupDisplays( displaysConfig ){
    const displays = {};
    displaysConfig.forEach( displayConfig => {
      displays[ displayConfig.name ] = new Display( displayConfig );
    } );
    return displays;
  }

  setupGrids( gridsConfig ){
    const grids = {};
    gridsConfig.forEach( gridConfig => {
      grids[ gridConfig.name ] = new Grid( gridConfig, this );
    } );
    return grids;
  }

  setupEventListeners(){
    this.keysPressed = [];
    window.addEventListener('resize', (e) => {this.resizeDisplays()} );
    window.addEventListener('keydown', (e) => this.keyDownHandler(e) );
    window.addEventListener('keyup', (e) => this.keyUpHandler(e) );
  }

  //load Images
  imageLoaded(){
    if (--this.imagesToLoad === 0) {
      this.imagesLoadedCallback( this );
    }
  }

  loadImages(){
    this.imagesToLoad = 0;
    Object.values( this.entities ).forEach( entity => {
      this.imagesToLoad += Object.keys(entity.imgSources).length;
    } );
    if (this.imagesToLoad === 0) { this.imagesLoadedCallback( this ) }
    else {
      Object.values( this.entities ).forEach( entity => {
        entity.loadImages( () => {this.imageLoaded()} );
      } );
    }
  }

  render(){
    const renderStart = performance.now();
    //render each Display
    Object.values( this.displays ).forEach( 
      display => display.render()
    );
    //check for mspt
    const mspt = performance.now() - renderStart;
    if (mspt > 3) {
      console.warn( 'mspt: ' + (performance.now() - renderStart) );
    }
    requestAnimationFrame( () => this.render() );
  }

  //Handler
  keyDownHandler( e ){
    if (!this.keysPressed.includes( e.key )) {
      Object.values(this.grids).forEach( grid => {
        grid.keyDownHandler( e );
      } );
      this.keysPressed.push( e.key );
    }
  }
  keyUpHandler( e ){
    Object.values(this.grids).forEach( grid => {
      grid.keyUpHandler( e );
    } );
    this.keysPressed.pop( e.key );
  }

//PUBLIC xD

  /**
   * @typedef {Object} displaySettings
   * @property {number} [left = 0] - Left offset of the grid in % of display width 
   * @property {number} [top = 0] - Top offset of the grid in % of display height
     @property {number} [width = 1] - Width of the grid in % of display width 
     @property {number} [height = 1] - Height of the grid in % of display height 
     @property {number} [columnsOnScreen = 1] - The number of columns which fit into the grids width
     @property {number} [rowsOnScreen = 1] - The number of rows which fit into the grids height
     @property {number} [columnShift = 0] - The number of columns the Grid should be shifted in c direction
     @property {number} [rowShift = 1] - The number of rows the Grid should be shifted in r direction
   */

  /**
   * Displays a grid on a display
   * @param {string} displayName - Name of the Display
   * @param {string} gridName - Name of the Grid
   * @param {displaySettings} displaySettings - Object containing all your displaySettings
   */
  displayGrid( displayName, gridName, displaySettings ){
    //validate displaySettings
    let validDisplaySettings;
    try {
      validDisplaySettings = Joi.attempt( displaySettings, Griga.displaySettingsSchema );
    }
    catch (e) {
      e.name = 'DisplaySettingsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    this.displays[ displayName ].linkGrid( this.grids[ gridName ], validDisplaySettings );
    this.grids[ gridName ].displays[ displayName ] = this.displays[ displayName ];
  }
  /**
   * Removes a grid from a display
   * @param {string} gridName - Name of the Grid
   * @param {string} displayName - Name of the Display
   */
  removeGridFromDisplay( gridName, displayName ){
    this.displays[ displayName ].unlinkGrid( gridName );
    delete this.grids[ gridName ].displays[ displayName ];
  }

  /**
   * Adds a new Display to griga.displays.
   * @param {string} name - Name of the Display
   * @param {string} wrapperId - Id of the html-element for the display
   * @param {*} widthHeightRatio -Width Height ratio
   */
  newDisplay( name, wrapperId, widthHeightRatio = 1 ){
    this.displays[ name ] = new Display( {
      name, wrapperId, widthHeightRatio
    } );
  }

  /**
   * Deletes a Display and all its Links to Grids
   * @param {string} name 
   */
  deleteDisplay( name ){
    Object.keys(this.displays[name].linkedGrids).forEach( grid => {
      delete this.grids[ grid ].displays[ name ];
    } );
    delete this.displays[name];
  }

  resizeDisplays(){
    Object.values( this.displays ).forEach( 
      display => display.resize()
    );
  }

}