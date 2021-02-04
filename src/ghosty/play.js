import { Popup } from "./popup";

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
        this.play_edit_button = document.getElementById('play-edit-button');
        this.level = this.app.levels.levels['classic'][0];
        this.category = 'classic';
        this.levelIndex = 0;
        this.state = null;
        this.keyTrackEntity = null;
        this.undoHistory = [];

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
        if ( this.category === 'yourLevels' ) {
            this.previous_level_button.classList.add('hidden');
            this.next_level_button.classList.add('hidden');
            this.play_edit_button.classList.remove('hidden');
        } else if ( this.category === 'classic' ) {
            this.previous_level_button.classList.remove('hidden');
            this.next_level_button.classList.remove('hidden');
            this.play_edit_button.classList.add('hidden');
        }
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
        this.undoHistory.push( this.level.sceneData );
        this.play_level_name.innerHTML = this.level.name;
    }

    clearLevel() {
        this.grid.clearScene();
        this.undoHistory = [];
    }

    levelDone() {
        if (this.popup) {return};
        let nextButtonText = 'Next level'
        if (this.category === 'yourLevels') { nextButtonText = 'Edit' };
        this.popup = new Popup( 'play-display', 'Level Done!',
        [
            {id: 'popup-play-again', text: 'Play again', click: () => this.handlePopupPlayAgainClick()},
            {id: 'popup-next-level', text: nextButtonText, click: () => this.handlePopupNextLevelClick()}
        ] );
    }

    updateUndoHistory() {
        this.undoHistory.push( this.grid.getCurrentSceneData() );
    }

    closePopup(){
        this.popup.close();
        this.popup = null;
    }

    handlePopupNextLevelClick() {
        if (this.category === 'classic') {
            this.handleNextLevelButtonClick();
        } else if (this.category === 'yourLevels') {
            this.handlePlayEditButtonClick();
        }
        this.closePopup();
    }

    handlePopupPlayAgainClick() {
        this.handlePlayRestartButtonClicked();
        this.closePopup();
    }

    handlePreviousLevelButtonClick( e ){
        if (this.levelIndex !== 0) {
            this.level = this.app.levels.levels[this.category][--this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handleNextLevelButtonClick(){
        if (this.levelIndex !== this.app.levels.levels[this.category].length-1) {
            this.level = this.app.levels.levels[this.category][++this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handlePlayLevelNameClick( e ){
        this.end();
        this.app.levels.start( this.category, this.levelIndex );
    }

    handlePlayRestartButtonClicked(){
        this.clearLevel();
        this.loadLevel();
    }

    handlePlayUndoButtonClick( e ){
        if (this.undoHistory.length === 1){return};
        this.undoHistory.pop();
        this.grid.clearScene();
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.undoHistory[ this.undoHistory.length-1 ] );
    }

    handlePlayEditButtonClick(){
        this.end();
        this.app.editor.start( this.level, this.category, this.levelIndex );
    }

    setupEventListeners(){
        this.previous_level_button.addEventListener('click', e => this.handlePreviousLevelButtonClick( e ));
        this.next_level_button.addEventListener('click', e => this.handleNextLevelButtonClick( e ));
        this.play_level_name.addEventListener('click', e => this.handlePlayLevelNameClick( e ));
        this.play_restart_button.addEventListener('click', e => this.handlePlayRestartButtonClicked( e ));
        this.play_undo_button.addEventListener('click', e => this.handlePlayUndoButtonClick( e ));
        this.play_edit_button.addEventListener('click', e => this.handlePlayEditButtonClick( e ));
    }
}