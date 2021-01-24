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
    this.home_button = document.querySelector('.home-button');
    this.play_button = document.querySelector('.play-button');
    this.editor_button = document.querySelector('.editor-button');
    this.content_div = document.querySelector('.content');
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
    this.setupEventListeners()
  }

  startGame( griga ){
    console.log( griga );
  }

  handleHomeButtonClick(){
    console.log('home-button clicked')
  }

  handlePlayButtonClick(){
    console.log('play-button clicked')
  }
  
  handleEditorButtonClick(){
    console.log('editor-button clicked')
  }
  
  handleContentDivClick(){
    console.log('content-div clicked')
  }
  setupEventListeners(){
    this.home_button.addEventListener('click', e => this.handleHomeButtonClick())
    this.play_button.addEventListener('click', e => this.handlePlayButtonClick())
    this.editor_button.addEventListener('click', e => this.handleEditorButtonClick())
    this.content_div.addEventListener('click', e => this.handleContentDivClick())
  }
}

document.addEventListener( 'DOMContentLoaded', () => {new App()} );