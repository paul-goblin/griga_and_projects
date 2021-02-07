import { Popup } from "./popup";

export class Editor {
    constructor( app, griga ){
        this.hotbar_scene_data = {"detached":[],"tiles":[[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]]]}
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['editor'];
        this.hotbar_grid = griga.grids['selection-hotbar'];
        this.lower_bar = document.querySelector('.lower-bar');
        this.new_button = document.getElementById('editor-new-button');
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

    loadSelectionHotbar(){
        this.hotbar_grid.loadScene( this.hotbar_scene_data );
        Object.keys(this.griga.entities).filter( entityName => {
            return !['SelectionBackground', 'BackgroundTile'].includes( entityName );
        } ).filter( eName => {
            const unlockLevel = this.griga.entities[eName].getUnlockLevel( this.app.levels.levels['classic'] );
            return unlockLevel < this.app.levels.classicHighestLevelIndex;
        } ).forEach( (entityName, i) => {
            this.hotbar_grid.newEntityInstance(entityName, {}, {c:i,r:0});
        } );
    }

    clearSelectionHotbar(){
        this.hotbar_grid.clearScene();
    }

    start( level, category, levelIndex ){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.state = 'editor';
        this.app.state = 'editor';
        this.loadSelectionHotbar();
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
            this.test_button.classList.add('hidden');
            this.rename_button.classList.add('hidden');
        } else {
            this.level_name.innerHTML = this.level.name;
            this.rename_button.classList.remove('hidden');
            this.test_button.classList.remove('hidden');
        }
    }

    clearLevel() {
        this.grid.clearScene();
    }

    end(){
        if (this.popup) { this.closePopup() };
        this.griga.removeGridFromDisplay(this.state, 'editor');
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection');
        this.clearLevel();
        this.clearSelectionHotbar();
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }

    sceneChangedHandler(){
        if (this.category === 'yourLevels') {
            this.level.sceneData = this.grid.getCurrentSceneData();
            this.app.levels.updateLevel( this.levelIndex );
        } else if (this.category === 'presets'){
            const [level, category, levelIndex] = this.saveSceneDataAsNewLevel( this.level.name, 'unknown', 'unknown' );
            this.clearLevel();
            this.loadLevel( level, category, levelIndex );
        }
    }

    saveSceneDataAsNewLevel( levelName, difficulty, creator ){
        return this.app.levels.newLevel(levelName, difficulty, creator, 
            this.grid.getCurrentSceneData()
        );
    }

    showSaveAsNewLevelPopup(){
        this.popup = new Popup( 'editor-display', '<i class="fas fa-clone"></i> Save a copy as:',
        [
            {id: 'popup-back', text: 'Back', click: iV => this.closePopup( iV )},
            {id: 'save-popup-save', text: 'Save', click: iV => this.handlePopupSaveNewClick( iV )}
        ],
        [
            {name: 'level-name', label: 'Name:', placeholder: 'unnamed'},
            {name: 'level-difficulty', label: 'Difficulty:', placeholder: 'easy'},
            {name: 'level-creator', label: 'Creator:', placeholder: 'You'}
        ] );
    }

    handlePopupSaveNewClick( iV ){
        this.saveSceneDataAsNewLevel(
            iV['level-name'],
            iV['level-difficulty'],
            iV['level-creator']
        );
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
        if (this.loadLevelAtPopupClose) {
            this.clearLevel();
            this.loadLevel();
        }
        this.loadLevelAtPopupClose = false;
    }

    switchToLevels(){
        this.end();
        this.app.levels.start( this.category, this.levelIndex );
    }

    handleSaveButtonClick( e ){
        if (this.popup) { this.closePopup() };
        this.showSaveAsNewLevelPopup();
    }

    handleLevelNameClick( e ){
        this.switchToLevels();
    }

    handleTestButtonClick( e ){
        this.end();
        this.app.play.start( this.level, this.category, this.levelIndex );
    }

    handleNewButtonClick( e ){
        this.end();
        this.app.levels.start( 'presets' );
    }

    handleRenameButtonClick( e ){
        if (this.popup) { this.closePopup() };
        if (this.category === 'presets') {
            this.showSaveAsNewLevelPopup();
            this.loadLevelAtPopupClose = true;
        } else if (this.category === 'yourLevels') {
            this.popup = new Popup( 'editor-display', `<i class="fas fa-i-cursor"></i> Rename level to:`,
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
        this.new_button.addEventListener('click', e => this.handleNewButtonClick( e ));
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

export const editorHelp = {
    english: 
    [
        {
            h3: 'Place Entities:',
            p: 'Select the entity in the selection bar, then click (or hold and drag) to place it'
        },
        {
            h3: 'Delete Entities:',
            p: 'Select the entity in the selection bar, then press ctrl and click (or hold and drag) to delete the entity'
        },
        {
            h3: 'Save:',
            p: 'All changes are automatically saved. Press the <i class="fas fa-clone"></i> icon to duplicate the current state of the Level'
        },
        {
            h3: 'Rename:',
            p: 'Press the <i class="fas fa-i-cursor"></i> icon to rename the level'
        },
        {
            h3: 'New Level:',
            p: 'To start creating a new level, press the <i class="fas fa-plus"></i> icon and choose a preset'
        },
        {
            h3: 'Unlock new entities:',
            p: 'Progress in the classic levels to unlock new entities in the editor'
        },
    ]
}