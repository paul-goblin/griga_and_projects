import { Griga } from "../griga/griga";
import { Entity } from "../griga/entity";

class Tick extends Entity {
  constructor( params, args ){
    super( {
      width: 0.8,
      height: 0.8,
      cOffset: 0.1,
      rOffset: 0.1,
      mouseDownSubscriptions: ['main-display', 'main-display2'],
    }, args );
    this.type = params.type;
  }

  static get imgSources(){
    return { default: './tile_img/gold_block.png',
             nichts: ''};
  }

  mouseDownHandler( display, c, r ){
    this.currentImage = 'nichts';
  }
}

class Ghosty extends Entity {
  constructor( params, args ){
    super( { layer: 1,
      width: 1,
      height: 1,
      keyDownSubscriptions: ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'],
      mouseDownSubscriptions: ['main-display']}, args );
    this.keysDown = {};
    this.addText( 'testText', 'I\'m Ghosty!' );
  }

  static get imgSources(){
    return { default: './tile_img/ghosty_left.png' };
  }

  keyDownHandler( key ){
    if (this.detached) {
      this.keysDown[ key ] = true;
      this.subscribeToKeyUp( key );
      if (!this.renderStartSubscription) {this.subscribeToRenderStart()};
    } else {
      this.move( key.slice(5) );
    }
    this.changeGridDisplaySettings( 'main-display', {
      columnShift: this.c-1,
      rowShift: this.r-1,
    } );
  }

  keyUpHandler( key ){
    this.keysDown[ key ] = false;
    this.unsubscribeFromKeyUp( key );
  }

  mouseDownHandler( display, c, r ){
    if (this.detached){
      this.attach( this.c, this.r );
      this.changeGridDisplaySettings( 'main-display', {
        columnShift: this.c-1,
        rowShift: this.r-1,
      } );
      this.width = 1;
    } else {
      this.detach();
      this.width = 2;
    }
  }

  renderStartHandler( timePassed ){
    if (this.keysDown[ 'ArrowUp' ]) {this.r -= timePassed/1000};
    if (this.keysDown[ 'ArrowDown' ]) {this.r += timePassed/1000};
    if (this.keysDown[ 'ArrowLeft' ]) {this.c -= timePassed/1000};
    if (this.keysDown[ 'ArrowRight' ]) {this.c += timePassed/1000};

    if (!Object.values(this.keysDown).includes(true)){ return this.unsubscribeFromRenderStart() };

    this.changeGridDisplaySettings( 'main-display', {
      columnShift: this.c-1,
      rowShift: this.r-1,
    } );
  }
}

const grigaConfig = {
  displays:[
    {
      name: 'main-display',
      wrapperId: 'main-display',
      widthHeightRatio: 1,
    },
    {
      name: 'main-display2',
      wrapperId: 'main-display2',
      widthHeightRatio: 2,
    },
  ],
  grids:[
    {
      name: 'main-grid',
      columns: 10,
      rows: 10,
    }
  ],
  entities:[ Tick, Ghosty ],
}

class App {
  constructor() {
    new Griga( grigaConfig, griga => this.startGame( griga ) );
  }

  startGame( griga ){
    this.griga = griga;
    const displaySettings = {
      columnsOnScreen: 6,
      rowsOnScreen: 6,
    }
    this.griga.displayGrid( 'main-display', 'main-grid', displaySettings );
    this.griga.displayGrid( 'main-display2', 'main-grid', displaySettings );
    this.emptyScene = this.griga.grids['main-grid'].getCurrentSceneData();
    this.emptyScene.tiles[0].forEach( tileData => tileData.push( ['Tick'] ) );
    this.emptyScene.tiles[9].forEach( tileData => tileData.push( ['Tick'] ) );
    for (let i = 1; i < 9; i++) {
      this.emptyScene.tiles[i][0].push( ['Tick'] );
      this.emptyScene.tiles[i][9].push( ['Tick'] );
    }
    this.griga.grids['main-grid'].loadScene( this.emptyScene );
    this.griga.grids['main-grid'].newEntityInstance( 'Ghosty', {}, {c:1, r:1} );
    console.log( this.emptyScene );
  }
}

document.addEventListener( 'DOMContentLoaded', () => {new App()} );