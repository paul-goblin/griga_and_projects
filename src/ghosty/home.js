import { Popup } from "./popup";

export class Home {
  constructor( app ){
    this.app = app;
    this.griga = this.app.griga;
  }

  start(){
    this.app.home_button.classList.add('active');
    this.app.home_screen.classList.remove('hidden');
    this.app.state = 'home';
    this.app.style.resizeWrapper();
    const lastShownVersion = this.app.localStorage.getLastShownVersion();
    if (this.app.version !== lastShownVersion) {
      this.app.localStorage.setLastShownVersion(this.app.version);
      console.log('new Version Popup!');
      this.popup = new Popup(
        'wrapper',
        `Ghosty Version 1.0.2 released!`,
        [
          {id: 'popup-close', text: 'Play', click: () => this.app.handlePlayButtonClick()},
        ], [],
        'What\'s new:',
        '-Round Boxes and Holes-<br>-CoppOR Gates-<br>-New Levels-<br>-Handy Support-<br>-Cutomize Editor-<br>-Smooth holding animation-'
      ) ;
    }
  }

  end(){
    if (this.popup) {this.closePopup()};
    this.app.home_button.classList.remove('active');
    this.app.home_screen.classList.add('hidden');
  }

  closePopup(){
    this.popup.close();
    this.popup = null;
  }
}

export const homeHelp = {
  english: 
  [
    {
      h3: null,
      p: 'Ghosty was developed by Tom Kopolt. \n Current Version: 1.0.2'
    },
    {
      h3: null,
      p: 'Im currently reworking ghosty completely. Stay tuned for story, online levels and more'
    },
    {
      h3: null,
      p: 'Note that the Level Editor is only available on a PC or Laptop'
    }
  ]
}