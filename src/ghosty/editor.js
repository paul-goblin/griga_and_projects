import { Display } from "../griga/display";
import { Popup } from "./popup";

export class Editor {
    constructor( app, griga ){
        this.hotbar_scene_data = {"detached":[],"tiles":[[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]]]}
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['editor'];
        this.hotbar_grid = griga.grids['selection-hotbar'];
        this.lower_bar = document.querySelector('.lower-bar');
        this.save_button = document.getElementById('editor-save-button');
        this.test_button = document.getElementById('editor-test-button');
        this.level_name = document.getElementById('editor-level-name');
        this.rename_button= document.getElementById('editor-rename-button');
        this.level = this.app.levels.levels['presets'][0];
        this.category = 'presets';
        this.levelIndex = 0;
        this.state = null;
        this.popup = null;
        this.selection = new Selection( this, this.hotbar_grid );
        this.hotbarDisplaySettings = {
            columnsOnScreen: this.hotbar_grid.columns,
            rowsOnScreen: this.hotbar_grid.rows,
        }
        this.setupEventListeners();
    }

    startGame(){
        this.hotbar_grid.loadScene( this.hotbar_scene_data );
        Object.keys(this.griga.entities).filter( entityName => {
            return !['SelectionBackground', 'BackgroundTile'].includes( entityName );
        } ).forEach( (entityName, i) => {
            this.hotbar_grid.newEntityInstance(entityName, {}, {c:i,r:0});
        } );
    }

    start( level, category, levelIndex ){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.state = 'editor';
        this.app.state = 'editor';
        this.selection.activateFirstSelectionBackground();
        this.griga.displayGrid('editor', 'editor', this.app.displaySettings);
        this.griga.displayGrid('selection', 'selection-hotbar', this.hotbarDisplaySettings);
        this.loadLevel( level, category, levelIndex );
        this.app.style.resizeWrapper();
        this.griga.resizeDisplays();
    }

    loadLevel( level = this.level, category = this.category, levelIndex = this.levelIndex) {
        this.level = level;
        this.category = category;
        this.levelIndex = levelIndex;
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.level.sceneData );
        if (category === 'presets') {
            this.level_name.innerHTML = this.level.name + ' <i>--preset</i>';
        } else {
            this.level_name.innerHTML = this.level.name;
        }
    }

    clearLevel() {
        this.grid.clearScene();
    }

    end(){
        if ( this.category === 'yourLevels' ){
            this.level.sceneData = this.grid.getCurrentSceneData( ['BackgroundTile'] );
            this.app.levels.updateLevel( this.levelIndex );
        }
        this.griga.removeGridFromDisplay(this.state, 'editor');
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection');
        this.clearLevel();
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }

    showSaveAsNewLevelPopup(){
        this.popup = new Popup( 'editor-display', '<i class="fas fa-save"></i> Save as new level:',
        [
            {id: 'popup-back', text: 'Don\'t save', click: iV => this.closePopup( iV )},
            {id: 'save-popup-save', text: 'Save', click: iV => this.handlePopupSaveNewClick( iV )}
        ],
        [
            {name: 'level-name', label: 'Name:', placeholder: 'unnamed'},
            {name: 'level-difficulty', label: 'Difficulty:', placeholder: 'easy'},
            {name: 'level-creator', label: 'Creator:', placeholder: 'You'}
        ] );
    }

    handlePopupSaveNewClick( iV ){
        const [level, category, levelIndex] = this.app.levels.newLevel(
            iV['level-name'],
            iV['level-difficulty'],
            iV['level-creator'],
            this.grid.getCurrentSceneData( 'BackgroundTile' )
        );
        this.clearLevel();
        this.loadLevel( level, category, levelIndex );
        if (this.switchToPlayOnLevelSave) {
            this.handleTestButtonClick();
        } else if (this.switchToLevelsOnLevelSave) {
            this.switchToLevels();
        }
        this.switchToPlayOnLevelSave = false;
        this.switchToLevelsOnLevelSave = false;
        this.closePopup();
    }

    handlePopupRenameClick( iV ){
        this.app.levels.renameLevel(
            this.levelIndex,
            iV['level-name'],
            iV['level-difficulty'],
            iV['level-creator']
        );
        this.clearLevel();
        this.loadLevel();
        this.closePopup();
    }

    closePopup(){
        this.popup.close();
        this.popup = null;
        if (this.switchToLevelsOnLevelSave) {
            this.switchToLevels();
        }
        this.switchToPlayOnLevelSave = false;
        this.switchToLevelsOnLevelSave = false;
    }

    switchToLevels(){
        this.end();
        this.app.levels.start( this.category, this.levelIndex );
    }

    handleSaveButtonClick( e ){
        if (e.ctrlKey) {
            const sceneData = this.grid.getCurrentSceneData( ['BackgroundTile'] );
            navigator.clipboard.writeText(JSON.stringify(sceneData));
            console.log('copied sceneDataJsonText');
        } else {
            this.showSaveAsNewLevelPopup();
        }
    }

    handleLevelNameClick( e ){
        if (this.category === 'presets') {
            this.switchToLevelsOnLevelSave = true;
            this.showSaveAsNewLevelPopup();
        } else if (this.category === 'yourLevels') {
            this.switchToLevels();
        }
    }

    handleTestButtonClick( e ){
        if (this.category === 'presets') {
            this.switchToPlayOnLevelSave = true;
            this.showSaveAsNewLevelPopup();
        } else if (this.category === 'yourLevels') {
            this.end();
            this.app.play.start( this.level, this.category, this.levelIndex );
        }
    }

    handleRenameButtonClick( e ){
        if (this.category === 'presets') {
            this.showSaveAsNewLevelPopup();
        } else if (this.category === 'yourLevels') {
            this.popup = new Popup( 'editor-display', `<i class="fas fa-pen"></i> Rename level to:`,
            [
                {id: 'popup-back', text: 'Back', click: iV => this.closePopup( iV )},
                {id: 'rename-popup-rename', text: 'Save', click: iV => this.handlePopupRenameClick( iV )}
            ],
            [
                {name: 'level-name', label: 'Name:', placeholder: this.level.name},
                {name: 'level-difficulty', label: 'Difficulty:', placeholder: this.level.difficulty},
                {name: 'level-creator', label: 'Creator:', placeholder: this.level.creator}
            ] );
        }
    }

    setupEventListeners(){
        this.save_button.addEventListener('click', e => this.handleSaveButtonClick( e ));
        this.test_button.addEventListener('click', e => this.handleTestButtonClick( e ));
        this.level_name.addEventListener('click', e => this.handleLevelNameClick( e ));
        this.rename_button.addEventListener('click', e => this.handleRenameButtonClick( e ));
    }
}

class Selection {
    constructor( editor, hotbar ){
        this.editor = editor;
        this.hotbar = hotbar;
        this.activeSelectionBackground = null;
        this.selectedEntity = null;
    }

    activateFirstSelectionBackground() {
        this.hotbar.getEntityInstances( {
            tile: {c:0, r:0},
            type: 'SelectionBackground'
        } )[0].mouseDownHandler();
    }

    setActiveSelectionBackground( selectionBackground ){
        if (this.activeSelectionBackground) {
            this.activeSelectionBackground.deactivate();
            this.selectedEntity = null;
        }
        if (selectionBackground) {
            selectionBackground.activate();
            this.selectedEntity = selectionBackground.otherEntity;
        }
        this.activeSelectionBackground = selectionBackground;
    }
}