export class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['play'];
        this.play_level_name = document.getElementById('play-level-name');
        this.previous_level_button = document.getElementById('previous-level-button');
        this.next_level_button = document.getElementById('next-level-button');
        this.play_restart_button = document.getElementById('play-restart-button');
        this.play_undo_button = document.getElementById('play-undo-button');
        this.level = this.app.levels.levels['classic'][0];
        this.category = 'classic';
        this.levelIndex = 0;
        this.state = null;
        this.undo_history = [];

        this.setupEventListeners();
    }

    startGame(){
        this.griga.displayGrid('play', 'play', this.app.displaySettings);
    }

    start( level, category, levelIndex ){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.state = 'play';
        this.app.state = 'play';
        this.loadLevel( level, category, levelIndex );
        this.app.style.resizeWrapper();
        this.griga.resizeDisplays();
    }

    end(){
        this.state = null;
        this.clearLevel();
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
    }

    loadLevel( level = this.level, category = this.category, levelIndex = this.levelIndex) {
        this.level = level;
        this.category = category;
        this.levelIndex = levelIndex;
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.level.sceneData );
        this.play_level_name.innerHTML = this.level.name;
    }

    clearLevel() {
        this.grid.clearScene();
    }

    levelDone() {
        console.log('TODO: level done!');
    }

    handlePreviousLevelButtonClick( e ){
        if (this.levelIndex !== 0) {
            this.level = this.app.levels.levels[this.category][--this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handleNextLevelButtonClick( e ){
        if (this.levelIndex !== this.app.levels.levels[this.category].length-1) {
            this.level = this.app.levels.levels[this.category][++this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handlePlayLevelNameClick( e ){
        this.end();
        this.app.levels.start( this.category );
        this.app.levels.showLevelDetails( this.levelIndex );
        this.app.style.setScrollPosToLevel( this.levelIndex );
    }

    handlePlayRestartButtonClicked( e ){
        this.clearLevel();
        this.loadLevel();
    }

    handlePlayUndoButtonClick( e ){
        console.log('TODO: Undo Button');
    }

    setupEventListeners(){
        this.previous_level_button.addEventListener('click', e => this.handlePreviousLevelButtonClick( e ));
        this.next_level_button.addEventListener('click', e => this.handleNextLevelButtonClick( e ));
        this.play_level_name.addEventListener('click', e => this.handlePlayLevelNameClick( e ));
        this.play_restart_button.addEventListener('click', e => this.handlePlayRestartButtonClicked( e ));
        this.play_undo_button.addEventListener('click', e => this.handlePlayUndoButtonClick( e ));
    }
}