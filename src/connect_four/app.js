import { Griga } from "../griga/griga";
import { Entity } from "../griga/entity";
import emptyFieldsSceneData from "./empty_fields_scene_data.json";

let app = null;

class Field extends Entity {
  constructor( params, args ){
    super( {
      mouseDownSubscriptions: ['main-display'],
    }, args );
    this.currentImage = 'empty';
  }

  static get imgSources(){
    return {
      empty: './tile_img/field_empty.png',
      red: './tile_img/field_red.jpg',
      yellow: './tile_img/field_yellow.jpg',
    };
  }

  mouseDownHandler(){
    const targetField = this.grid.getEntityInstances( {
      tile: { c:this.c, r:5-app.coinsInColumns[this.c] },
    } )[0];
    if (targetField) {
      app.place( targetField );
    }
  }
}

const grigaConfig = {
  displays:[
    {
      name: 'main-display',
      wrapperId: 'main-display',
      widthHeightRatio: 7/6,
    }
  ],
  grids:[
    {
      name: 'main-grid',
      columns: 7,
      rows: 6,
    }
  ],
  entities:[ Field ],
}

class App {
  constructor() {
    this.griga = new Griga( grigaConfig, griga => this.setupGame( griga ) );
    this.playerTurnLabel = document.getElementById( 'player_turn_label' );
    this.emptyFieldsSceneData = emptyFieldsSceneData;
  }

  setupGame( griga ){
    console.log( griga );
    this.griga.displayGrid( 'main-display', 'main-grid', {
      columnsOnScreen: 7, rowsOnScreen: 6,
    } );
    this.startGame();
  }

  startGame(){
    this.griga.grids['main-grid'].clearScene();
    this.griga.grids['main-grid'].loadScene( this.emptyFieldsSceneData );
    this.coinsInColumns = [0, 0, 0, 0, 0, 0, 0];
    this.targetCoinHistory = [];
    this.changePlayerTurn();
  }

  place( targetField ){
    this.targetCoinHistory.push( targetField );
    targetField.currentImage = this.turn;
    this.coinsInColumns[ targetField.c ]++;
    this.changePlayerTurn();
  }

  undo(){
    const lastTargetCoin = this.targetCoinHistory[ this.targetCoinHistory.length-1 ];
    if (lastTargetCoin) {
      lastTargetCoin.currentImage = 'empty';
      this.coinsInColumns[ lastTargetCoin.c ]--;
      this.targetCoinHistory.splice(-1,1);
      this.changePlayerTurn();
    }
  }

  changePlayerTurn(){
    if (this.turn === 'red') {this.turn = 'yellow'}
    else {this.turn = 'red'};
    //this.playerTurnLabel.innerHTML = `${this.turn}'s turn`;
    this.playerTurnLabel.style.color = this.turn;
  }
}

document.addEventListener( 'DOMContentLoaded', () => {app = new App()} );
document.getElementById( 'restart_button' ).addEventListener( 'click', () => app.startGame() );
document.getElementById( 'undo_button' ).addEventListener( 'click', () => app.undo() );