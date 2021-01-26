export class Editor {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.selection = new Selection( this );
        this.display_settings = {
            columnsOnScreen: griga.grids['editor'].columns,
            rowsOnScreen: griga.grids['editor'].rows,
        }
        this.selection_display_settings = {
            columnsOnScreen: griga.grids['selection-hotbar'].columns,
            rowsOnScreen: griga.grids['selection-hotbar'].rows,
        }
    }

    start(){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.griga.displayGrid('editor', 'editor', this.display_settings);
        this.griga.displayGrid('selection', 'selection-hotbar', this.selection_display_settings);
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection')
        this.griga.removeGridFromDisplay('editor', 'editor');
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }
}

class Selection {
    constructor( editor ){
        this.editor = editor;
        this.activeSelectionBackground = null;
        this.selectedEntity = null;
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