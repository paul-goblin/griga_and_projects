import { Griga } from "../griga/griga";
import { Editor } from "./editor";
import { BackgroundTile } from "./entities/background_tile";
import { Ghosty } from "./entities/ghosty_entities/ghosty";
import { Goal } from "./entities/ghosty_entities/goal";
import { Stone } from "./entities/ghosty_entities/stone";
import { WoodenBox } from "./entities/ghosty_entities/wooden_box";
import { SelectionBackground } from "./entities/selection_background";
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
      name: 'editor-test',
      columns: CS,
      rows: RS,
    },
    {
      name: 'selection-hotbar',
      columns: 10,
      rows: 1,
    }
  ],
  entities:[BackgroundTile, SelectionBackground, Stone, Ghosty, Goal, WoodenBox],
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
    this.play_levels_button = document.querySelector('.play-levels-button');
    this.save_button = document.querySelector('.save-button');
    this.editor_test_button = document.querySelector('.editor-test-button');
    this.state = 'home';
    this.backgroundTileScene = null;
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
    this.play = new Play( this, this.griga );
    this.editor = new Editor( this, this.griga );
    this.setupEventListeners();
  }

  startGame( griga ){
    griga.ghosty = this
    for (let r = 0; r < RS; r++) {
      for (let c = 0; c < CS; c++) {
        griga.grids['play'].newEntityInstance('BackgroundTile', {}, {detached: false, c: c, r: r});
        griga.grids['editor'].newEntityInstance(
          'BackgroundTile',
          {},
          {detached: false, c: c, r: r});
      }
    }
    this.backgroundTileScene = griga.grids['play'].getCurrentSceneData();

    for (let c = 0; c < 10; c++) {
      griga.grids['selection-hotbar'].newEntityInstance(
        'SelectionBackground',
        {},
        {detached: false, c: c, r: 0}
      );
    }
    griga.grids['selection-hotbar'].newEntityInstance('Stone', {}, {c:0,r:0});
    griga.grids['selection-hotbar'].newEntityInstance('Ghosty', {}, {c:1,r:0});
    griga.grids['selection-hotbar'].newEntityInstance('Goal', {}, {c:2,r:0});
    griga.grids['selection-hotbar'].newEntityInstance('WoodenBox', {}, {c:3,r:0});
  }

  levelDone(){
    if (this.state === 'play') {
      this.play.levelDone();
    }
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
    this.home_button.addEventListener('click', e => this.handleHomeButtonClick());
    this.play_button.addEventListener('click', e => this.handlePlayButtonClick());
    this.editor_button.addEventListener('click', e => this.handleEditorButtonClick());
    this.content_div.addEventListener('click', e => this.handleContentDivClick())
    this.save_button.addEventListener('click', e => this.editor.handleSaveButtonClick( e ));
    this.editor_test_button.addEventListener('click', e => this.editor.handleTestButtonClick( e ));
    this.play_levels_button.addEventListener('click', e => this.play.handleLevelsButtonClick( e ));
    this.play.levels_container.addEventListener('click', e => this.play.handleLevelsContainerClick( e ));
  }
}


document.addEventListener( 'DOMContentLoaded', () => {new App()} );