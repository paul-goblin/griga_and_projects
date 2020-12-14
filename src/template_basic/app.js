import { Griga } from "../griga/griga";
import { Entity } from "../griga/entity";

class Ghosty extends Entity {
  constructor( params, args ){
    super( {}, args );
  }

  static get imgSources(){
    return { default: './tile_img/ghosty_left.png' };
  }
}

const grigaConfig = {
  displays:[
    {
      name: 'main-display',
      wrapperId: 'main-display',
      widthHeightRatio: 1,
    }
  ],
  grids:[
    {
      name: 'main-grid',
      columns: 10,
      rows: 10,
    }
  ],
  entities:[ Ghosty ],
}

class App {
  constructor() {
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
  }

  startGame( griga ){
    console.log( griga );
    this.griga.displayGrid( 'main-display', 'main-grid', {
      columnsOnScreen: 10, rowsOnScreen: 10,
    } );
    griga.grids['main-grid'].newEntityInstance( 'Ghosty', {}, {c:0,r:0} );
  }
}

document.addEventListener( 'DOMContentLoaded', () => {new App()} );