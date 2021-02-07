class GridLink {
  constructor( gridInstance, displaySettings, display ){
    this.gridInstance = gridInstance;
    this.displaySettings = displaySettings;
    this.display = display;

    this.processDisplaySettings();

    this.canvas = null;
    this.offCanvas = null;
    this.ctx = null;
  }

  processDisplaySettings(){
    this.leftInPx = this.displaySettings.left * this.display.width;
    this.topInPx = this.displaySettings.top * this.display.height;
    this.widthInPx = this.displaySettings.width * this.display.width;
    this.heightInPx = this.displaySettings.height * this.display.height;
    this.tileWidthInPx = this.widthInPx / this.displaySettings.columnsOnScreen;
    this.tileHeightInPx = this.heightInPx / this.displaySettings.rowsOnScreen;
    this.xShift = this.displaySettings.columnShift * this.tileWidthInPx;
    this.yShift = this.displaySettings.rowShift * this.tileHeightInPx;
  }

  updateDisplaySettings( newDisplaySettings ){
    for (let [property, value] of Object.entries( newDisplaySettings )) {
      this.displaySettings[ property ] = value;
    }
  }

  newCanvas(){
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.widthInPx;
    this.canvas.height = this.heightInPx;
    this.canvas.setAttribute('style', `
      position: absolute;
      top: ${this.topInPx}px;
      left: ${this.leftInPx}px;
      pointer-events: none;
    `);
    this.canvas.setAttribute( 'data--grid-name', this.gridInstance.name );
    this.display.wrapper.appendChild( this.canvas );
    try {
      this.offCanvas = this.canvas.transferControlToOffscreen();
    } catch {
      console.warn('Your Browser does not support canvas.transferControlToOffscreen(). Therefore the game might lag a bit');
      this.offCanvas = this.canvas;
    }
    this.ctx = this.offCanvas.getContext('2d');
  }

  resizeCanvas(){
    this.canvas.remove();
    this.processDisplaySettings();
    this.newCanvas();
  }
}

/**
 * @class
 * @classdesc Displays render all entities on displayed grids. Use the griga config to create them and use the Griga.displayGrid function to display a grid.
 */
export class Display {
  /**
   * @hideconstructor
   */
  constructor( config ){
    /**
     * Name of the display
     * @type {string}
     * @readonly
     */
    this.name = config.name;
    /**
     * Wrapper element of the Display
     * @type {HTMLElement}
     * @readonly
     */
    this.wrapper = document.getElementById(config.wrapperId);
    /**
     * The Wrapper's widthHeightRation
     * @type {number}
     * @readonly
     */
    this.widthHeightRatio = config.widthHeightRatio;

    this.resizeWrapper();
    this.setupWrapperEventListeners();
    
    this.linkedGrids = {};//see linkGrid and GridLink for structure
    this.displayData = [];

    this.mouseX = 0;
    this.mouseY = 0;
    this.gridsInHover = [];
  }

  //resize
  resize(){
    this.resizeWrapper();
    for (let gridLink of Object.values( this.linkedGrids )) {
      gridLink.resizeCanvas();
    };
  }

  resizeWrapper(){
    const computedStyle = getComputedStyle( this.wrapper );
    this.width = parseFloat( computedStyle.width.slice( 0,-2 ) );
    this.height = this.width/this.widthHeightRatio;
    this.wrapper.setAttribute('style', `
      height:${this.height}px;
      position: relative;
      overflow: hidden;
    `);//hidden overflow
  }

  setupWrapperEventListeners(){
    this.wrapper.addEventListener( 'mousemove', (e) => this.mouseMoveHandler(e) );
    this.wrapper.addEventListener( 'mouseleave', (e) => this.mouseLeaveHandler(e) );
    this.wrapper.addEventListener('mousedown', (e) => this.mouseDownHandler(e) );
    this.wrapper.addEventListener('mouseup', (e) => this.mouseUpHandler(e) );
  }

  linkGrid( grid, displaySettings ){
    const gridLink = new GridLink( grid, displaySettings, this );
    gridLink.newCanvas();
    this.linkedGrids[ grid.name ] = gridLink;
  }
  unlinkGrid( gridName ){
    this.linkedGrids[ gridName ].canvas.remove();
    delete this.linkedGrids[ gridName ];
  }

  changeGridDisplaySettings( gridName, displaySettings ){
    this.linkedGrids[ gridName ].updateDisplaySettings( displaySettings );
    this.linkedGrids[ gridName ].processDisplaySettings();
  }

  updateDisplayData(){
    this.displayData = Object.values(this.linkedGrids).map(
      gridLink => gridLink.gridInstance.displayData
    );
  }

  //drawing
  clearCanvas( offCanvas, ctx ){
    ctx.clearRect( 0,0, offCanvas.width, offCanvas.height);
  }

  render(){

    this.updateDisplayData();

    this.displayData.forEach( //Array of Grid Display Data
      gridDisplayData => {
        const gridLink = this.linkedGrids[ gridDisplayData.gridName ];
        this.clearCanvas( gridLink.offCanvas, gridLink.ctx );
        gridDisplayData.allLayersEntityInstanceDisplayData.forEach( //Array of allLayersEntityInstanceDisplayData
          ( layerEntityInstanceDisplayData, layer ) => {
            layerEntityInstanceDisplayData.forEach( //array of entityInstanceDisplayData
              entityInstanceDisplayData => {
                gridLink.ctx.drawImage(
                  entityInstanceDisplayData.img,
                  entityInstanceDisplayData.pos.c * gridLink.tileWidthInPx - gridLink.xShift,
                  entityInstanceDisplayData.pos.r * gridLink.tileHeightInPx - gridLink.yShift,
                  Math.ceil(gridLink.tileWidthInPx * entityInstanceDisplayData.width),
                  Math.ceil(gridLink.tileHeightInPx * entityInstanceDisplayData.height),
                );
                Object.values( entityInstanceDisplayData.texts ).forEach( text => {
                  gridLink.ctx.font = `${text.size * gridLink.tileHeightInPx}px ${text.fontFamily}`;
                  gridLink.ctx.fillStyle = text.color;
                  gridLink.ctx.fillText(
                    text.text,
                    (entityInstanceDisplayData.pos.c + text.cOffset) * gridLink.tileWidthInPx - gridLink.xShift,
                    (entityInstanceDisplayData.pos.r + text.rOffset + text.size*0.75) * gridLink.tileHeightInPx - gridLink.yShift
                  );
                } );
              }
            );
          }
        );
      }
    );
  }

  //handler
  mouseLeaveHandler( e ){
    this.gridsInHover.forEach( gridName => {
      this.linkedGrids[ gridName ].gridInstance.mouseLeaveHandler( this.name );
    } );
    this.gridsInHover = [];
  }

  mouseMoveHandler( e ){
    //update mouse pos
    this.mouseX = e.offsetX;
    this.mouseY = e.offsetY;
    //update Grids
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx + grid.xShift;
      const gridMouseY = this.mouseY - grid.topInPx + grid.yShift;
      if (gridMouseX >= grid.xShift && gridMouseX < grid.xShift + grid.widthInPx
       && gridMouseY >= grid.yShift && gridMouseY < grid.yShift + grid.heightInPx) {
        if (grid.gridInstance.mouse.displayName !== this.name) {
          this.gridsInHover.push( grid.gridInstance.name );
        }
        const gridMouseC = gridMouseX/grid.tileWidthInPx;
        const gridMouseR = gridMouseY/grid.tileHeightInPx;
        grid.gridInstance.mouseMoveHandler( this.name, gridMouseC,gridMouseR, e.buttons, e.ctrlKey );
      }
      else if (grid.gridInstance.mouse.displayName === this.name) {
        grid.gridInstance.mouseLeaveHandler( this.name );
        this.gridsInHover.splice( this.gridsInHover.indexOf( grid.gridInstance.name ), 1 );
      }
    } );
  }

  mouseDownHandler( e ){
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx;
      const gridMouseY = this.mouseY - grid.topInPx;
      if (gridMouseX >= 0 && gridMouseX < grid.widthInPx
       && gridMouseY >= 0 && gridMouseY < grid.heightInPx) {
        grid.gridInstance.mouseDownHandler( this.name, e.ctrlKey );
      }
    } );
  }
  mouseUpHandler( e ){
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx;
      const gridMouseY = this.mouseY - grid.topInPx;
      if (gridMouseX >= 0 && gridMouseX < grid.widthInPx
       && gridMouseY >= 0 && gridMouseY < grid.heightInPx) {
        grid.gridInstance.mouseUpHandler( this.name, e.ctrlKey );
      }
    } );
  }
}