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
        this.griga.resizeDisplays();
    }

    loadLevel( level = this.level, category = this.category, levelIndex = this.levelIndex) {
        this.level = level;
        this.category = category;
        this.levelIndex = levelIndex;
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.level.sceneData );
        this.level_name.innerHTML = this.level.name;
    }

    clearLevel() {
        this.grid.clearScene();
    }

    end(){
        this.griga.removeGridFromDisplay(this.state, 'editor');
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection');
        this.clearLevel();
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }

    showSavePopup(){
        this.popup = new Popup( 'editor-display', 'Works!' );
    }

    handleSaveButtonClick( e ){
        if (e.ctrlKey) {
            const sceneData = this.grid.getCurrentSceneData( ['BackgroundTile'] );
            navigator.clipboard.writeText(JSON.stringify(sceneData));
            console.log('copied sceneDataJsonText');
        } else {
            this.showSavePopup();
        }
    }

    handleLevelNameClick( e ){
        this.end();
        this.app.levels.start( 'yourLevels' );
    }

    handleTestButtonClick( e ){
        console.log('test button clicked');
    }

    handleRenameButtonClick( e ){
        console.log('rename');
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