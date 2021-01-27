import testLevel from './level/test_level.json';

export class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['play'];
        this.display_settings = {
            columnsOnScreen: this.grid.columns,
            rowsOnScreen: this.grid.rows,
        }
    }

    start(){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.grid.loadScene(testLevel);
        this.griga.displayGrid('play', 'play', this.display_settings);
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('play', 'play');
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
    }
}