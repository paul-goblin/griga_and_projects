import classicLevels from './level/all_classic_levels.json';
import presetLevels from './level/presets.json';
import { Popup } from "./popup";

export class Levels {
  constructor( app ){
    this.app = app;
    this.griga = this.app.griga;
    this.grid = this.griga.grids['preview'];
    this.levels = {
      classic: classicLevels,
      yourLevels: this.app.localStorage.getYourLevels(),
      presets: presetLevels,
    }
    this.levels_container = document.querySelector('.levels-container');
    this.classic_button = document.getElementById('classic-button');
    this.yourLevels_button = document.getElementById('your-levels-button');
    this.presets_button = document.getElementById('presets-button');
    this.detailsLevelIndex = null;

    this.levels_container.addEventListener('mousedown', e => this.handleLevelsContainerClick( e ));
    this.classic_button.addEventListener('click', e => this.changeState('classic'));
    this.yourLevels_button.addEventListener('click', e => this.changeState('yourLevels'));
    this.presets_button.addEventListener('click', e => this.changeState('presets'));

  }

  start( category = 'classic', levelIndex) {
    this.app.state = 'levels';
    this.app.levels_screen.classList.remove('hidden');
    this.app.levels_button.classList.add('active');
    this.detailsLevelIndex = levelIndex ||  this.levels[ category ].length-1 ;
    this.changeState( category, this.detailsLevelIndex );
    this.app.style.resizeWrapper();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
  }

  end() {
    this.hideLevelDetails();
    this.app.levels_screen.classList.add('hidden');
    this.app.levels_button.classList.remove('active');
    this[this.state+'_button'].classList.remove('active');
    this.deleteDisplays();
    const oldState = this.state;
    this.state = null;
    return oldState;
  }

  changeState( state, detailsLevelIndex) {
    if (this.state) {
      this[this.state+'_button'].classList.remove('active');
      this.hideLevelDetails();
      this.deleteDisplays();
    }
    this.state = state;
    this[this.state+'_button'].classList.add('active');
    this.clearLevelsContainer();
    this.fillLevelsContainer();
    this.detailsLevelIndex = detailsLevelIndex || this.levels[ this.state ].length-1;
    this.showLevelDetails( this.detailsLevelIndex );
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
  }

  getLevelHtmlString(level, i){
    let levelBarButtonsString = `<div class="level-play-button button right" data-level="${i}"><i class="fas fa-play"></i></div>`;
    if (this.state === 'presets') {
      levelBarButtonsString = `<div class="button level-edit-button" data-index="${i}"><i class="fas fa-pen"></i></div>`;
    }

    let editorButtonContainer = '';
    if (this.state === 'yourLevels') {
      editorButtonContainer = `
      <div class="editor-buttons-container">
          <div class="button level-edit-button" data-index="${i}"><i class="fas fa-pen"></i></div>
          <div class="button level-delete-button" data-index="${i}"><i class="fas fa-trash"></i></div>
      </div>
      `;
    }
    return `
    <div class="level-bar">
        <div class="level-name button">${level.name}</div>
        ${levelBarButtonsString}
    </div>
    <div class="level-details level-bar hidden" id="level-details-${i}" data-index="${i}">
        <div class="display preview-display" id="preview-display-${i}"></div>
        <div class="item preview-details-container">
            <div class="preview-difficulty-line preview-line">difficulty: <span class="difficulty-${i}">${level.difficulty}</span></div>
            <div class="preview-creator-line preview-line">creator: <span class="creator-${i}">${level.creator}</span></div>
        </div>
        ${editorButtonContainer}
        </div>
    </div>
    `;
  }

  deleteDisplays(){
    Object.keys(this.griga.displays).filter( k => k.slice(0, 12) === 'play-preview' ).forEach( d => {
      this.griga.deleteDisplay( d );
    } );
    this.detailsLevelIndex = null;
  }

  clearLevelsContainer(){
    this.levels_container.innerHTML = '';
  }

  fillLevelsContainer(){
    this.levels[this.state].forEach( (level, i) => {
        this.insertNewLevelInLevelContainer( level, i );
    } );
  }

  insertNewLevelInLevelContainer( level, i ){
    const htmlString = this.getLevelHtmlString( level, i );
    this.levels_container.insertAdjacentHTML('beforeend', htmlString);
    this.griga.newDisplay( 'play-preview-'+i, 'preview-display-'+i, this.grid.columns/this.grid.rows );
  }

  removeLevelFromLevelsContainer( levelIndex ){
    const levelDetails = document.getElementById('level-details-'+levelIndex);
    const levelBar = levelDetails.previousElementSibling;
    levelDetails.remove();
    levelBar.remove();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPos( this.app.style.scrollPos );
  }
  
  showLevelDetails( detailsLevelIndex ){
    this.detailsLevelIndex = detailsLevelIndex;
    const levelDetailsBar = document.getElementById('level-details-'+ detailsLevelIndex);
    levelDetailsBar.classList.remove('hidden');
    this.griga.displayGrid('play-preview-'+detailsLevelIndex, 'preview', this.app.displaySettings);
    this.grid.loadScene( this.app.backgroundTileScene );
    this.grid.loadScene( this.levels[this.state][ this.detailsLevelIndex ].sceneData );
    this.griga.resizeDisplays();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
  }

  hideLevelDetails(){
    if (this.detailsLevelIndex || this.detailsLevelIndex === 0) {
        const levelDetailsBar = document.getElementById('level-details-'+this.detailsLevelIndex);
        levelDetailsBar.classList.add('hidden');
        this.griga.removeGridFromDisplay('preview', 'play-preview-'+this.detailsLevelIndex);
        this.grid.clearScene();
        this.detailsLevelIndex = null;
    }
  }

  deleteLevel( levelIndex ){
    this.app.localStorage.deleteLevel( this.levels['yourLevels'][levelIndex].name );
    this.hideLevelDetails();
    this.levels[this.state].splice( levelIndex, 1 );
    this.removeLevelFromLevelsContainer( levelIndex );
  }

  handleLevelNameClicked( target ){
    const levelDetailsBar = target.parentElement.nextElementSibling;
    if (levelDetailsBar.classList.contains('hidden')) {
        this.hideLevelDetails();
        this.showLevelDetails( parseInt(levelDetailsBar.getAttribute('data-index')) );
    } else {
        this.hideLevelDetails();
        this.app.style.setScrollbarHeight();
        this.app.style.setScrollPos( this.app.style.scrollPos );
    }
  }

  handleLevelPlayButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-level'));
    const oldState = this.end();
    this.app.play.start( this.levels[oldState][levelIndex], oldState, levelIndex );
  }

  handleLevelEditButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    const oldState = this.end();
    this.app.editor.start( this.levels[oldState][levelIndex], oldState, levelIndex );
  }

  handleLevelDeleteButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    this.popup = new Popup( 'preview-display-'+levelIndex, 'Are you Sure?',
    [
      {id: 'popup-play-again', text: 'Cancel', click: () => this.closePopup()},
      {id: 'popup-next-level', text: 'Delete', click: () => this.deleteLevel( levelIndex )}
    ] );
  }

  closePopup(){
    this.popup.close();
    this.popup = null;
  }

  handleLevelsContainerClick( e ){
    if (e.target.classList.contains('level-name')) {
      this.handleLevelNameClicked( e.target );
    } else if (e.target.classList.contains('level-play-button')) {
      this.handleLevelPlayButtonClicked( e.target );
    } else if (e.target.classList.contains('level-edit-button')) {
      this.handleLevelEditButtonClicked( e.target );
    } else if (e.target.classList.contains('level-delete-button')) {
      this.handleLevelDeleteButtonClicked( e.target );
    }
  }

  renameLevel( levelIndex, name, difficulty, creator ){
    this.levels['yourLevels'][ levelIndex ].creator = creator;
    this.levels['yourLevels'][ levelIndex ].difficulty = difficulty;
    this.levels['yourLevels'][ levelIndex ].name = this.app.localStorage.renameLevel( //might add numbers to level name;
      this.levels['yourLevels'][ levelIndex ].name,
      name,
      difficulty,
      creator
    );
  }

  updateLevel( levelIndex ){
    this.app.localStorage.saveLevel( this.levels['yourLevels'][levelIndex] );
  }

  newLevel( name, difficulty, creator, sceneData ){
    let level = new GhostyLevel( name, difficulty, creator, sceneData );
    level = this.app.localStorage.saveNewLevel( level ); //might add numbers to level name;
    this.levels['yourLevels'].push(level);
    return [ level, 'yourLevels', this.levels['yourLevels'].length-1 ];
  }
}

class GhostyLevel {
  constructor( name, difficulty, creator, sceneData ){
    this.name = name;
    this.difficulty = difficulty;
    this.creator = creator;
    this.sceneData = sceneData;
  }
}