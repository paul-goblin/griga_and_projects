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
    this.fastGrid = [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ]; //0 for empty field, 1 for red, 2 for yellow
    this.targetCoinHistory = [];
    this.changePlayerTurn();
  }

  place( targetField ){
    if (this.gameStopped) {return};
    this.targetCoinHistory.push( targetField );
    targetField.currentImage = this.turn;
    this.coinsInColumns[ targetField.c ]++;
    this.fastGrid[ targetField.c ][ targetField.r ] = this.turnNumber;
    if (this.checkWin( targetField.c, targetField.r )){
      this.won();
    } else {
      this.changePlayerTurn();
    }
  }

  undo(){
    const lastTargetCoin = this.targetCoinHistory[ this.targetCoinHistory.length-1 ];
    if (lastTargetCoin) {
      lastTargetCoin.currentImage = 'empty';
      this.coinsInColumns[ lastTargetCoin.c ]--;
      this.fastGrid[ lastTargetCoin.c ][ lastTargetCoin.r ] = 0;
      this.targetCoinHistory.splice(-1,1);
      this.changePlayerTurn();
    }
  }

  changePlayerTurn(){
    if (this.turn === 'red') {this.turn = 'yellow'; this.turnNumber = 2}
    else {this.turn = 'red'; this.turnNumber = 1};
    this.playerTurnLabel.innerHTML = 'Playing...';
    this.playerTurnLabel.style.color = this.turn;
  }

  checkWin( coinC, coinR ){

    const checkVertical = function(){
      const startR = (coinR-3>=0) ? coinR-3 : 0;
      const endR = (coinR+3<=5) ? coinR+3 : 5;
      let consecutive = 0;
      for (let r = startR; r <= endR; r++) {
        if (this.fastGrid[coinC][r] === this.turnNumber) {consecutive++}
        else {consecutive = 0};
        if (consecutive === 4) {return true}
        else if (endR-r+consecutive < 4) {return false};
      }
    }

    const checkHorizontally = function(){
      const startC = (coinC-3>=0) ? coinC-3 : 0;
      const endC = (coinC+3<=6) ? coinC+3 : 6;
      let consecutive = 0;
      for (let c = startC; c <= endC; c++) {
        if (this.fastGrid[c][coinR] === this.turnNumber) {consecutive++}
        else {consecutive = 0};
        if (consecutive === 4) {return true}
        else if (endC-c+consecutive < 4) {return false};
      }
    }

    const checkUpwardsDiagonal = function(){
      const diagonal = coinC+coinR;
    }

    return (
      checkHorizontally.call(this) ||
      checkVertical.call(this)
    );
  }

  won(){
    this.playerTurnLabel.innerHTML = 'Winner!!!';
    this.gameStopped = true;
  }
}

document.addEventListener( 'DOMContentLoaded', () => {app = new App()} );
document.getElementById( 'restart_button' ).addEventListener( 'click', () => app.startGame() );
document.getElementById( 'undo_button' ).addEventListener( 'click', () => app.undo() );