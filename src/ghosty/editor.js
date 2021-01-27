export class Editor {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['editor'];
        this.test_grid = griga.grids['editor-test'];
        this.lower_bar = document.querySelector('.lower-bar');
        this.state = null;
        this.selection = new Selection( this );
        this.display_settings = {
            columnsOnScreen: this.grid.columns,
            rowsOnScreen: this.grid.rows,
        }
        this.selection_display_settings = {
            columnsOnScreen: griga.grids['selection-hotbar'].columns,
            rowsOnScreen: griga.grids['selection-hotbar'].rows,
        }
    }

    start(){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.app.editor_test_button.classList.remove('hidden');
        if (!this.state) {this.startEditState();}
        this.griga.displayGrid('selection', 'selection-hotbar', this.selection_display_settings);
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection')
        this.app.editor_button.classList.remove('active');
        this.app.editor_test_button.classList.add('hidden');
        this.app.editor_screen.classList.add('hidden');
    }

    startEditState() {
        this.state = 'edit';
        this.app.editor_test_button.innerHTML = 'test';
        this.lower_bar.classList.remove('hidden');
        this.selection.activateFirstSelectionBackground();
        this.griga.displayGrid('editor', 'editor', this.display_settings);
        this.griga.windowResized = true;
    }

    endEditState() {
        this.state = null;
        this.griga.removeGridFromDisplay('editor', 'editor');
        this.lower_bar.classList.add('hidden');
        this.selection.setActiveSelectionBackground( null );
    }

    startTestState() {
        this.state = 'test';
        this.app.editor_test_button.innerHTML = 'edit';
        const sceneData = this.grid.getCurrentSceneData();
        this.test_grid.loadScene( sceneData );
        this.griga.displayGrid('editor', 'editor-test', this.display_settings);
        this.griga.windowResized = true;
    }

    endTestState() {
        this.state = null;
        this.griga.removeGridFromDisplay('editor-test', 'editor');
    }

    handleSaveButtonClick( e ){
        if (e.ctrlKey) {
            const sceneData = this.grid.getCurrentSceneData( ['BackgroundTile'] );
            navigator.clipboard.writeText(JSON.stringify(sceneData));
            console.log('copied sceneDataJsonText');
        }
    }

    handleTestButtonClick( e ){
        if (this.state === 'edit') {
            this.endEditState();
            this.startTestState();
        } else {
            this.endTestState();
            this.startEditState();
        }
    }
}

class Selection {
    constructor( editor ){
        this.editor = editor;
        this.activeSelectionBackground = null;
        this.selectedEntity = null;
    }

    activateFirstSelectionBackground() {
        this.editor.griga.grids['selection-hotbar'].getEntityInstances( {
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