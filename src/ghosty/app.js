import { Griga } from "../griga/griga";
import { Editor } from "./editor";
import { BackgroundTile } from "./entities/background_tile";
import { SelectionBackground } from "./entities/selection_background";
import { Stone } from "./entities/stone";
import { Play } from "./play";

const CS = 16;
const RS = 10;

const grigaConfig = {
  displays:[
    {
      name: 'play',
      wrapperId: 'play-display',
      widthHeightRatio: CS/RS,
    },
    {
      name: 'editor',
      wrapperId: 'editor-display',
      widthHeightRatio: CS/RS,
    },
    {
      name: 'selection',
      wrapperId: 'selection-display',
      widthHeightRatio: 10/1
    }
  ],
  grids:[
    {
      name: 'play',
      columns: CS,
      rows: RS,
    },
    {
      name: 'editor',
      columns: CS,
      rows: RS,
    },
    {
      name: 'selection-hotbar',
      columns: 10,
      rows: 1,
    }
  ],
  entities:[BackgroundTile, SelectionBackground, Stone],
}

class App {
  constructor() {
    this.home_button = document.querySelector('.home-button');
    this.play_button = document.querySelector('.play-button');
    this.editor_button = document.querySelector('.editor-button');
    this.content_div = document.querySelector('.content');
    this.home_screen = document.querySelector('.home-screen');
    this.play_screen = document.querySelector('.play-screen');
    this.editor_screen = document.querySelector('.editor-screen');
    this.state = 'home';
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
    this.play = new Play( this, this.griga );
    this.editor = new Editor( this, this.griga );
    this.setupEventListeners();
  }

  startGame( griga ){
    for (let r = 0; r < RS; r++) {
      for (let c = 0; c < CS; c++) {
        griga.grids['play'].newEntityInstance('BackgroundTile', {}, {detached: false, c: c, r: r});
        griga.grids['editor'].newEntityInstance(
          'BackgroundTile',
          {selection: this.editor.selection},
          {detached: false, c: c, r: r});
      }
    }
    
    griga.grids['play'].newEntityInstance('Stone', {}, {c:0,r:0});

    for (let c = 0; c < 10; c++) {
      griga.grids['selection-hotbar'].newEntityInstance(
        'SelectionBackground',
        {selection: this.editor.selection},
        {detached: false, c: c, r: 0}
      );
    }
    griga.grids['selection-hotbar'].newEntityInstance('Stone', {}, {c:0,r:0});
  }

  handleHomeButtonClick(){
    if (this.state !== 'home') {
      this.home_button.classList.add('active');
      this.home_screen.classList.remove('hidden');
      if (this.state === 'play') {
        this.play.end();
      }
      if (this.state === 'editor') {
        this.editor.end();
      }
      this.state = 'home';
    }
  }

  handlePlayButtonClick(){
    if (this.state !== 'play') {
      if (this.state === 'home') {
        this.home_button.classList.remove('active');
        this.home_screen.classList.add('hidden');
      }
      if (this.state === 'editor') {
        this.editor.end();
      }
      this.state = 'play';
      this.play.start();
    }
  }
  
  handleEditorButtonClick(){
    if (this.state !== 'editor') {
      if (this.state === 'play') {
        this.play.end()
      }
      if (this.state === 'home') {
        this.home_button.classList.remove('active');
        this.home_screen.classList.add('hidden');
      }
      this.state = 'editor';
      this.editor.start();
    }
  }
  
  handleContentDivClick(){
    if (this.state === 'home') {
      this.home_button.classList.remove('active');
      this.home_screen.classList.add('hidden');
      this.state = 'play'
      this.play.start();
    }
  }

  setupEventListeners(){
    this.home_button.addEventListener('click', e => this.handleHomeButtonClick())
    this.play_button.addEventListener('click', e => this.handlePlayButtonClick())
    this.editor_button.addEventListener('click', e => this.handleEditorButtonClick())
    this.content_div.addEventListener('click', e => this.handleContentDivClick())
  }
}


document.addEventListener( 'DOMContentLoaded', () => {new App()} );