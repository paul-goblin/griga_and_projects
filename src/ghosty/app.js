import { Griga } from "../griga/griga";

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
  entities:[],
}

class App {
  constructor() {
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
  }

  startGame( griga ){
    console.log( griga );
  }
}

document.addEventListener( 'DOMContentLoaded', () => {new App()} );