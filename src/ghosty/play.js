import classicLevels from './level/all_classic_levels.json';

export class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['play'];
        this.levels_button = document.querySelector('.play-levels-button');
        this.levels_container = document.querySelector('.levels-container');
        this.play_elements = document.querySelector('.play-play-elements');
        this.play_level_name = document.getElementById('play-level-name');
        this.previous_level_button = document.getElementById('previous-level-button');
        this.next_level_button = document.getElementById('next-level-button');
        this.play_restart_button = document.getElementById('play-restart-button');
        this.play_undo_button = document.getElementById('play-undo-button');
        this.display_settings = {
            columnsOnScreen: this.grid.columns,
            rowsOnScreen: this.grid.rows,
        }
        this.levelIndex = 0;
        this.state = null;
        this.undo_history = [];
    }

    start(){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.levels_button.classList.remove('hidden');
        this.griga.displayGrid('play', 'play', this.display_settings);
        if (!this.state) {this.startPlayState()};
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('play', 'play');
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
        this.levels_button.classList.add('hidden');
    }

    updateLevelsContainer(){
        let htmlString = '';
        classicLevels.forEach( (level, i) => {
            htmlString += `
            <div class="level-bar">
                <div class="level-name button">${level.name}</div>
                <div class="level-play-button button right" data-level="${i}"><i class="fas fa-play"></i></div>
            </div>
            `
        } );
        this.levels_container.innerHTML = htmlString;
    }

    startPlayState() {
        this.state = 'play';
        this.levels_button.innerHTML = 'levels';
        this.loadLevel();
        this.play_elements.classList.remove('hidden');
        this.griga.windowResized = true;
    }

    endPlayState() {
        this.state = null;
        this.play_elements.classList.add('hidden');
        this.clearLevel();
    }

    startLevelsState() {
        this.state = 'levels';
        this.updateLevelsContainer();
        this.levels_container.classList.remove('hidden');
        this.levels_button.innerHTML = 'continue';
    }

    endLevelsState() {
        this.state = null;
        this.levels_container.classList.add('hidden');
    }

    loadLevel( levelIndex = this.levelIndex ) {
        this.levelIndex = levelIndex;
        this.grid.loadScene( classicLevels[ this.levelIndex ].sceneData );
        this.play_level_name.innerHTML = classicLevels[ this.levelIndex ].name;
    }

    clearLevel() {
        this.grid.clearScene()
        this.grid.loadScene( this.app.backgroundTileScene );
    }

    levelDone() {
        if (classicLevels[ this.levelIndex + 1 ]) {
            this.clearLevel();
            this.loadLevel();
        }
    }

    handleLevelsButtonClick( e ){
        if (this.state === 'play') {
            this.endPlayState();
            this.startLevelsState();
        } else {
            this.endLevelsState();
            this.startPlayState();
        }
    }

    handleLevelNameClicked( target ){
        console.log('TODO: show level details!');
    }

    handleLevelPlayButtonClicked( target ){
        this.levelIndex = parseInt(target.getAttribute('data-level'));
        this.endLevelsState();
        this.startPlayState();
    }

    handleLevelsContainerClick( e ){
        if (e.target.classList.contains('level-name')) {
            this.handleLevelNameClicked( e.target );
        } else if (e.target.classList.contains('level-play-button')) {
            this.handleLevelPlayButtonClicked( e.target );
        }
    }

    handlePreviousLevelButtonClick( e ){
        if (this.levelIndex !== 0) {
            this.clearLevel();
            this.loadLevel( this.levelIndex-1 );
        }
    }

    handleNextLevelButtonClick( e ){
        if (this.levelIndex !== classicLevels.length-1) {
            this.clearLevel();
            this.loadLevel( this.levelIndex+1 );
        }
    }

    handlePlayLevelNameClick( e ){
        this.handleLevelsButtonClick( e );
    }

    handlePlayRestartButtonClicked( e ){
        this.clearLevel();
        this.loadLevel();
    }

    handlePlayUndoButtonClick( e ){
        console.log('TODO: Undo Button');
    }

    setupEventListeners(){
        this.levels_button.addEventListener('click', e => this.handleLevelsButtonClick( e ));
        this.levels_container.addEventListener('click', e => this.handleLevelsContainerClick( e ));
        this.previous_level_button.addEventListener('click', e => this.handlePreviousLevelButtonClick( e ));
        this.next_level_button.addEventListener('click', e => this.handleNextLevelButtonClick( e ));
        this.play_level_name.addEventListener('click', e => this.handlePlayLevelNameClick( e ));
        this.play_restart_button.addEventListener('click', e => this.handlePlayRestartButtonClicked( e ));
        this.play_undo_button.addEventListener('click', e => this.handlePlayUndoButtonClick( e ));
    }
}