import testLevel from './level/test_level.json';
import introductionLevel from './level/introduction.json';

export class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['play'];
        this.levels_container = document.querySelector('.levels-container');
        this.display_wrapper = document.getElementById('play-display');
        this.display_settings = {
            columnsOnScreen: this.grid.columns,
            rowsOnScreen: this.grid.rows,
        }
        this.level = 0;
        this.levels = [
            ['Test Level', testLevel],
            ['Introduction', introductionLevel]
        ]
        this.state = null;
        this.undo_history = [];
    }

    start(){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.app.play_levels_button.classList.remove('hidden');
        this.griga.displayGrid('play', 'play', this.display_settings);
        if (!this.state) {this.startPlayState()};
        this.griga.windowResized = true;
    }

    end(){
        this.griga.removeGridFromDisplay('play', 'play');
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
        this.app.play_levels_button.classList.add('hidden');
    }

    updateLevelsContainer(){
        let htmlString = '';
        this.levels.forEach( (level, i) => {
            htmlString += `
            <div class="level-bar">
                <div class="level-name button">${level[0]}</div>
                <div class="level-play-button button right" data-level="${i}">play</div>
            </div>
            `
        } );
        this.levels_container.innerHTML = htmlString;
    }

    startPlayState() {
        this.state = 'play';
        this.app.play_levels_button.innerHTML = 'levels';
        this.grid.loadScene( this.levels[ this.level ][1] );
        this.display_wrapper.classList.remove('hidden');
        this.griga.windowResized = true;
    }

    endPlayState() {
        this.state = null;
        this.display_wrapper.classList.add('hidden');
        this.grid.clearScene();
        this.grid.loadScene( this.app.backgroundTileScene );
    }

    startLevelsState() {
        this.state = 'levels';
        this.updateLevelsContainer();
        this.levels_container.classList.remove('hidden');
        this.app.play_levels_button.innerHTML = 'continue';
    }

    endLevelsState() {
        this.state = null;
        this.levels_container.classList.add('hidden');
    }

    handleLevelsButtonClick( e ){
        if (this.state === 'play') {
            this.endPlayState();
            this.startLevelsState();
        } else {
            this.endLevelsState();
            this.startPlayState();
        }
    }

    handleLevelNameClicked( target ){
        console.log('TODO: show level details!');
    }

    handleLevelPlayButtonClicked( target ){
        this.level = target.getAttribute('data-level');
        this.endLevelsState();
        this.startPlayState();
    }

    handleLevelsContainerClick( e ){
        if (e.target.classList.contains('level-name')) {
            this.handleLevelNameClicked( e.target );
        } else if (e.target.classList.contains('level-play-button')) {
            this.handleLevelPlayButtonClicked( e.target );
        }
    }
}