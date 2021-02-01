import classicLevels from './level/all_classic_levels.json';
import presetLevels from './level/presets.json';

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
    this.detailsLevelIndex = null;

    this.levels_container.addEventListener('mousedown', e => this.handleLevelsContainerClick( e ));
    this.classic_button.addEventListener('click', e => this.changeState('classic'));
    this.yourLevels_button.addEventListener('click', e => this.changeState('yourLevels'));
  }

  start( state = 'classic' ) {
    this.changeState( state );
    this.app.state = 'levels';
    this.app.levels_screen.classList.remove('hidden');
    this.app.levels_button.classList.add('active');
    this.app.style.resizeWrapper();
    this.app.style.setScrollbarHeight();
  }

  end() {
    this.hideLevelDetails();
    this.app.levels_screen.classList.add('hidden');
    this.app.levels_button.classList.remove('active');
    this.deleteDisplays();
  }

  changeState( state ) {
    if (this.state) {
      this[this.state+'_button'].classList.remove('active');
      this.hideLevelDetails();
      this.deleteDisplays();
    }
    this.state = state;
    this[this.state+'_button'].classList.add('active');
    this.clearLevelsContainer();
    this.fillLevelsContainer();
    this.app.style.setScrollbarHeight();
  }

  getLevelHtmlString(level, i){
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
        <div class="level-play-button button right" data-level="${i}"><i class="fas fa-play"></i></div>
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
  }

  hideLevelDetails(){
    if (this.detailsLevelIndex || this.detailsLevelIndex === 0) {
        const levelDetailsBar = document.getElementById('level-details-'+this.detailsLevelIndex);
        levelDetailsBar.classList.add('hidden');
        this.griga.removeGridFromDisplay('preview', 'play-preview-'+this.detailsLevelIndex);
        this.grid.clearScene();
        this.detailsLevelIndex = null;
        this.app.style.setScrollbarHeight();
    }
  }

  handleLevelNameClicked( target ){
    const levelDetailsBar = target.parentElement.nextElementSibling;
    if (levelDetailsBar.classList.contains('hidden')) {
        this.hideLevelDetails();
        this.showLevelDetails( parseInt(levelDetailsBar.getAttribute('data-index')) );
    } else {
        this.hideLevelDetails();
    }
  }

  handleLevelPlayButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-level'));
    this.end();
    this.app.play.start( this.levels[this.state][levelIndex], this.state, levelIndex );
  }

  handleLevelEditButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    this.end();
    this.app.editor.start( this.levels[this.state][levelIndex], this.state, levelIndex );
  }

  handleLevelDeleteButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    this.app.localStorage.deleteLevel( this.levels['yourLevels'][levelIndex].name );
    this.hideLevelDetails();
    this.levels[this.state].splice( levelIndex, 1 );
    this.removeLevelFromLevelsContainer( levelIndex );
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