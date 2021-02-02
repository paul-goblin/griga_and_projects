import { Griga } from "../griga/griga";
import { Editor } from "./editor";
import { BackgroundTile } from "./entities/background_tile";
import { Ghosty } from "./entities/ghosty_entities/ghosty";
import { Goal } from "./entities/ghosty_entities/goal";
import { Stone } from "./entities/ghosty_entities/stone";
import { WoodenBox } from "./entities/ghosty_entities/wooden_box";
import { SelectionBackground } from "./entities/selection_background";
import { Levels } from "./levels";
import { Play } from "./play";
import { Style } from "./style";
import { LocalStorage } from "./local_storage";

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
    },
    {
      name: 'preview',
      columns: CS,
      rows: RS
    }
  ],
  entities:[BackgroundTile, SelectionBackground, Stone, Ghosty, Goal, WoodenBox],
}

class App {
  constructor() {
    this.backgroundTileScene = {"detached":[],"tiles":[[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]]]}
    this.home_button = document.querySelector('.home-button');
    this.play_button = document.querySelector('.play-button');
    this.levels_button = document.querySelector('.levels-button');
    this.editor_button = document.querySelector('.editor-button');
    this.content_div = document.querySelector('.content');
    this.home_screen = document.querySelector('.home-screen');
    this.play_screen = document.querySelector('.play-screen');
    this.editor_screen = document.querySelector('.editor-screen');
    this.levels_screen = document.querySelector('.levels-screen');
    this.state = 'home';
    this.displaySettings = {columnsOnScreen: CS, rowsOnScreen: RS};
    this.style = new Style( this );
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
    this.localStorage = new LocalStorage( this );
    this.levels = new Levels( this );
    this.play = new Play( this, this.griga );
    this.editor = new Editor( this, this.griga );
    this.setupEventListeners();
  }

  startGame( griga ){
    griga.ghosty = this;
    this.play.startGame();
    this.editor.startGame();
  }

  levelDone(){
    if (this.state === 'play') {
      this.play.levelDone();
    }
  }

  endActiveState(){
    if (this.state === 'home') {
      this.home_button.classList.remove('active');
      this.home_screen.classList.add('hidden');
    }
    else {
      this[this.state].end();
    }
  }

  handleHomeButtonClick(){
    this.endActiveState();
    this.home_button.classList.add('active');
    this.home_screen.classList.remove('hidden');
    this.state = 'home';
    this.style.resizeWrapper();
  }

  handlePlayButtonClick(){
    this.endActiveState();
    this.play.start();
  }
  
  handleEditorButtonClick(){
    this.endActiveState();
    this.editor.start();
  }

  handleLevelsButtonClick(){
    this.endActiveState();
    if (this.state === 'editor') {
      this.levels.start('yourLevels');
    } else {
      this.levels.start('classic');
    }
  }
  
  handleContentDivClick(){
    if (this.state === 'home') {
      this.endActiveState();
      this.play.start();
    }
  }

  setupEventListeners(){
    this.home_button.addEventListener('click', e => this.handleHomeButtonClick());
    this.play_button.addEventListener('click', e => this.handlePlayButtonClick());
    this.editor_button.addEventListener('click', e => this.handleEditorButtonClick());
    this.levels_button.addEventListener('click', e => this.handleLevelsButtonClick());
    this.content_div.addEventListener('click', e => this.handleContentDivClick());
  }
}


document.addEventListener( 'DOMContentLoaded', () => {new App()} );