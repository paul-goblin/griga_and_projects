import { Griga } from "../griga/griga";
import { Editor, editorHelp } from "./editor";
import { BackgroundTile } from "./entities/background_tile";
import { Ghosty } from "./entities/ghosty_entities/ghosty";
import { Goal } from "./entities/ghosty_entities/goal";
import { Stone } from "./entities/ghosty_entities/stone";
import { WoodenBox } from "./entities/ghosty_entities/wooden_box";
import { SelectionBackground } from "./entities/selection_background";
import { Levels, levelsHelp } from "./levels";
import { Play, playHelp } from "./play";
import { Style } from "./style";
import { LocalStorage } from "./local_storage";
import { Hole } from "./entities/ghosty_entities/hole";
import { HoleBorder } from "./entities/ghosty_entities/hole_border";
import { Home, homeHelp } from "./home";
import { Popup } from "./popup";
import { DiamondStone } from "./entities/ghosty_entities/diamond_stone";
import { DiamondPressurePlate } from "./entities/ghosty_entities/diamond_pressure_plate";
import { CopperStone } from "./entities/ghosty_entities/copper_stone";
import { CopperPressurePlate } from "./entities/ghosty_entities/copper_pressure_plate";
import { WoodenBoxCircle } from "./entities/ghosty_entities/wooden_box_octagon";
import { HoleCircle } from "./entities/ghosty_entities/hole_circle";
import { AllEntitiesBackground } from "./entities/all_entities_background";

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
      name: 'all-entities-selection',
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
  entities:[BackgroundTile, SelectionBackground, AllEntitiesBackground, Stone, Ghosty, Goal, WoodenBox, Hole, HoleBorder, DiamondStone, DiamondPressurePlate, CopperStone, CopperPressurePlate, WoodenBoxCircle, HoleCircle],
}

class App {
  constructor() {
    this.backgroundTileScene = {"detached":[],"tiles":[[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]]]}
    this.wrapper = document.getElementById('wrapper');
    this.home_button = document.querySelector('.home-button');
    this.play_button = document.querySelector('.play-button');
    this.levels_button = document.querySelector('.levels-button');
    this.editor_button = document.querySelector('.editor-button');
    this.help_button = document.querySelector('.help-button');
    this.content_div = document.querySelector('.content');
    this.home_screen = document.querySelector('.home-screen');
    this.play_screen = document.querySelector('.play-screen');
    this.editor_screen = document.querySelector('.editor-screen');
    this.levels_screen = document.querySelector('.levels-screen');
    this.state = 'home';
    this.version = '1.0.2';
    this.helpBook = {
      home: homeHelp,
      play: playHelp,
      levels: levelsHelp,
      editor: editorHelp
    }
    this.displaySettings = {columnsOnScreen: CS, rowsOnScreen: RS};
    this.style = new Style( this );
    this.griga = new Griga( grigaConfig, griga => this.startGame( griga ) );
    this.localStorage = new LocalStorage( this );
    this.home = new Home( this );
    this.levels = new Levels( this );
    this.play = new Play( this, this.griga );
    this.editor = new Editor( this, this.griga );
    this.setupEventListeners();
  }

  startGame( griga ){
    griga.ghosty = this;
    this.play.startGame();
    this.home.start();
  }

  endActiveState(){
    this[this.state].end();
  }

  handleNextHelpPopupClick(){
    this[this.state].closePopup();
    this.handleHelpButtonClick( ++this.helpPageIndex%this.helpBook[this.state][this.helpLanguage].length, this.helpLanguage );
  }

  handleHelpButtonClick( index = 0, language = this.helpLanguage ){
    this.helpPageIndex = index;
    this.helpLanguage = language || 'english'
    if (this[this.state].popup) { this[this.state].closePopup() };
    this[this.state].popup = new Popup(
      'wrapper',
      `Ghosty Help: ${this.state.charAt(0).toUpperCase()+this.state.slice(1)}`,
      [
        {id: 'popup-close', text: 'Close', click: iV => this[this.state].closePopup( iV )},
        {id: 'next-help-popup', text: 'Next', click: iV => this.handleNextHelpPopupClick( iV )}
      ], [],
      this.helpBook[this.state][this.helpLanguage][this.helpPageIndex].h3,
      this.helpBook[this.state][this.helpLanguage][this.helpPageIndex].p
    ) ;
  }

  handleHomeButtonClick(){
    this.endActiveState();
    this.home.start();
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
    if (this.state === 'play') {
      this.levels.start(this.play.category, this.play.levelIndex);
    } else if (this.state === 'editor') {
      this.levels.start(this.editor.category, this.editor.levelIndex);
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
    this.help_button.addEventListener('click', e => this.handleHelpButtonClick());
    this.content_div.addEventListener('click', e => this.handleContentDivClick());
  }
}


document.addEventListener( 'DOMContentLoaded', () => {new App()} );