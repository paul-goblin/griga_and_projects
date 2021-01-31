import classicLevels from './level/all_classic_levels.json';
import presetLevels from './level/presets.json';

export class Levels {
  constructor( app ){
    this.app = app;
    this.griga = this.app.griga;
    this.grid = this.griga.grids['preview'];
    this.levels = {
      classic: classicLevels,
      yourLevels: [],
      presets: presetLevels,
    }
    this.levels_container = document.querySelector('.levels-container');
    this.classic_button = document.getElementById('classic-button');
    this.yourLevels_button = document.getElementById('your-levels-button');
    this.detailsLevelIndex = null;

    this.levels_container.addEventListener('mousedown', e => this.handleLevelsContainerClick( e ));
    this.classic_button.addEventListener('click', e => this.changeState('classic'));
    this.yourLevels_button.addEventListener('click', e => this.changeState('yourLevels'))
  }

  start( state = 'classic' ) {
    this.changeState( state );
    this.app.state = 'levels';
    this.fillLevelsContainer();
    this.app.levels_screen.classList.remove('hidden');
    this.app.levels_button.classList.add('active');
    this.app.style.resizeWrapper();
  }

  end() {
    this.hideLevelDetails();
    this.app.levels_screen.classList.add('hidden');
    this.app.levels_button.classList.remove('active');
    this.deleteDisplays();
    console.log('ended level state');
  }

  changeState( state ) {
    if (this.state) {
      this[this.state+'_button'].classList.remove('active');
      this.deleteDisplays();
    }
    this.state = state;
    this[this.state+'_button'].classList.add('active');
    this.fillLevelsContainer();
    this.app.style.resizeScrollbar();
  }

  deleteDisplays(){
    console.log(this.griga.displays);
    Object.keys(this.griga.displays).filter( k => k.slice(0, 12) === 'play-preview' ).forEach( d => {
      this.griga.deleteDisplay( d );
    } );
    this.detailsLevelIndex = null;
  }

  fillLevelsContainer(){
    let htmlString = '';
    this.levels[this.state].forEach( (level, i) => {
        htmlString += `
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
            </div>
        </div>
        `
    } );
    this.levels_container.innerHTML = htmlString;
    this.levels[this.state].forEach( (level, i) => {
        this.griga.newDisplay( 'play-preview-'+i, 'preview-display-'+i, this.grid.columns/this.grid.rows );
    } );
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

  handleLevelsContainerClick( e ){
    if (e.target.classList.contains('level-name')) {
        this.handleLevelNameClicked( e.target );
    } else if (e.target.classList.contains('level-play-button')) {
        this.handleLevelPlayButtonClicked( e.target );
    }
  }
}