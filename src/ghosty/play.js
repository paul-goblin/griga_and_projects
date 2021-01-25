export class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.display_settings = {
            columnsOnScreen: 16,
            rowsOnScreen: 9,
        }
    }

    start(){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.griga.displayGrid('play', 'play', this.display_settings);
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('play', 'play');
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
    }
}