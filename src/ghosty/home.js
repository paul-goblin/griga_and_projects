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
      p: 'Ghosty was developed by Tom Kopolt. \n Current Version: 1.0.0'
    }
  ]
}