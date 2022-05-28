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
        this.levelIndex = this.app.levels.classicHighestLevelIndex;
        this.category = 'classic';
        this.level = this.app.levels.levels[this.category][this.levelIndex];
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
        if (this.popup) {this.closePopup()};
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
        let levelBarText = `${this.levelIndex+1}: ${this.level.name}`;
        if (this.category === 'yourLevels') {
            levelBarText = level.name;
        }
        this.play_level_name.innerHTML = levelBarText;
        this.updateNextPreviousLevelButtons();
    }

    updateNextPreviousLevelButtons(){
        if ( this.category === 'classic' ) {
            if ( this.levelIndex === this.app.levels.classicHighestLevelIndex ) {
                this.next_level_button.classList.add('disabled');
            } else {
                this.next_level_button.classList.remove('disabled');
            }
            if ( this.levelIndex === 0 ) {
                this.previous_level_button.classList.add('disabled');
            } else {
                this.previous_level_button.classList.remove('disabled');
            }
        }
    }

    clearLevel() {
        this.grid.clearScene();
        this.undoHistory = [];
    }

    levelDone() {
        if (this.popup) {return};
        this.app.levels.levelDone( this.levelIndex, this.category );
        this.updateNextPreviousLevelButtons();
        let nextButtonText = 'Next level';
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
    }

    handlePopupPlayAgainClick() {
        this.handlePlayRestartButtonClicked();
    }

    handlePreviousLevelButtonClick( e ){
        if (this.popup) {this.closePopup()};
        if (this.previous_level_button.classList.contains('disabled')) {return};
        if (this.levelIndex !== 0) {
            this.level = this.app.levels.levels[this.category][--this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handleNextLevelButtonClick(){
        if (this.popup) {this.closePopup()};
        if (this.next_level_button.classList.contains('disabled')) {return};
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
        if (this.popup) {this.closePopup()};
        this.clearLevel();
        this.loadLevel();
    }

    handlePlayUndoButtonClick( e ){
        if (this.undoHistory.length === 1){return};
        if (this.popup) {this.closePopup()};
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

export const playHelp = {
    english: 
    [
        {
            h3: 'How to move:',
            p: 'Use the arrow keys on your keyboard or swipe on a touchscreen'
        },
        {
            h3: 'Undo:',
            p: 'Press the <i class="fas fa-undo"></i> icon to undo the last move'
        },
        {
            h3: 'Restart:',
            p: 'Press the <i class="fas fa-fast-backward"></i> icon to restart the level'
        },
    ]
}