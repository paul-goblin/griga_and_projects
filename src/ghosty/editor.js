export class Editor {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
    }

    start(){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.griga.windowResized = true;
    }

    end(){
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }
}