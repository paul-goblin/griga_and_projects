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
   * 
   * @param {Object} config
   * @param {Object[]} config.displays
   * @param {string} config.displays[].name - name of the display
   * @param {GriGa~imagesLoadedCallback} cb - The callback triggers when all the Images are Loaded
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
    this.displays = this.setupDisplays( validConfig.displays );
    this.grids = this.setupGrids( validConfig.grids );
    this.entities = Object.fromEntries( validConfig.entities.map(
      entity => [entity.name, entity]
    ) );

    this.setupEventListeners();

    //loadImages
    this.imagesLoadedCallback = imagesLoadedCallback;
    this.loadImages();
    requestAnimationFrame( () => this.render() );
  }

  /**
   * @callback GriGa~imagesLoadedCallback
   * @param {GriGa} griGa - the GriGa instance 
   */

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
    this.windowResized = false;
    this.keysPressed = [];
    window.addEventListener('resize', (e) => {this.windowResized = true} );
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
      display => display.render( this.windowResized )
    );
    //check for mspt
    const mspt = performance.now() - renderStart;
    if (mspt > 2) {
      console.warn( 'mspt: ' + (performance.now() - renderStart) );
    }
    this.windowResized = false;
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
    e.preventDefault();
  }
  keyUpHandler( e ){
    Object.values(this.grids).forEach( grid => {
      grid.keyUpHandler( e );
    } );
    this.keysPressed.pop( e.key );
  }

//PUBLIC xD

  /**
   * displays a grid on a display
   * @param {string} displayName - name of the Display
   * @param {string} gridName - name of the Grid
   * @param {Object} displaySettings - object containing all your displaysettings
   * @param {number} [displaySettings.left = 0] - left offset of the grid in % of display width 
   * @param {number} [displaySettings.top = 0] - top offset of the grid in % of display height
     @param {number} [displaySettings.width = 1] - width of the grid in % of display width 
     @param {number} [displaySettings.height = 1] - height of the grid in % of display height 
     @param {number} [displaySettings.columnsOnScreen = 1] - the number of columns which fit into the grids width
     @param {number} [displaySettings.rowsOnScreen = 1] - the number of rows which fit into the grids height
     @param {number} [displaySettings.columnShift = 0] - the number of columns the Grid should be shifted in c direction
     @param {number} [displaySettings.rowShift = 1] - the number of rows the Grid should be shifted in r direction
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
  removeGridFromDisplay( gridName, displayName ){
    this.displays[ displayName ].unlinkGrid( gridName );
    this.grids[ gridName ].displays.pop( displayName );
  }

}