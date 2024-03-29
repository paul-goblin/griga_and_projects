function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}

export class Style {
  constructor( app ){
    this.app = app;
    this.scrollbar = document.querySelector('.scrollbar');
    this.scrollbar_box = document.querySelector('.scrollbar-box');
    this.levels_container = document.querySelector('.levels-container');
    this.wrapper = document.querySelector('.wrapper');
    this.scrollPos = 0;
    this.ongoingTouch = [];

    this.scrollbar.addEventListener('mousemove', e => this.handleMouseMoveOnScrollbar(e));
    this.scrollbar.addEventListener('wheel', e => this.handleMouseScroll(e));
    this.levels_container.addEventListener('wheel', e => this.handleMouseScroll(e));
    this.levels_container.addEventListener('touchmove', e => this.handleTouchMove(e));
    this.levels_container.addEventListener('touchend', e => this.handleTouchEnd(e));
    this.levels_container.addEventListener('touchstart', e => this.handleTouchStart(e));

    window.addEventListener('resize', e => {
      this.setScrollbarHeight();
      this.resizeWrapper();
    });
    this.resizeWrapper();
  }

  setScrollPos( y ){
    if (y < 0) {
      this.scrollPos = 0;
    } else if (y < this.levelsContainerHeight - this.scrollHeight) {
      this.scrollPos = y;
    } else {
      this.scrollPos = this.levelsContainerHeight - this.scrollHeight;
    }
    this.levels_container.setAttribute('style', `
      margin-top: -${this.scrollPos}px;
    `);
  }

  setScrollPosToLevel( levelIndex ){
      const level_bar = document.getElementById('level-details-'+levelIndex).previousElementSibling;
      this.setScrollPos( level_bar.offsetTop );
  }

  setScrollbarHeight(){
      const levelsContainerHeight = getComputedStyle(this.levels_container).height;
      this.scrollbar_box.setAttribute('style', `
        height:${levelsContainerHeight};
      `);
      this.levelsContainerHeight = parseInt(levelsContainerHeight.slice(0, -2));
      this.resizeScrollbar();
  }

  resizeScrollbar(){
    this.scrollHeight = document.documentElement.clientHeight
      - this.levels_container.getBoundingClientRect().top - 20
      + parseInt(getComputedStyle(this.levels_container).marginTop.slice(0,-2));
    if (this.scrollHeight > this.levelsContainerHeight) {
      this.scrollbar_box.classList.add('hidden');
    } else {
      this.scrollbar_box.classList.remove('hidden');
    }
    this.scrollbar.setAttribute('style', `
      height:${this.scrollHeight}px;
    `);
  }

  resizeWrapper(){
    if (this.app.state === 'home' || (this.app.state === 'levels')) {
      this.wrapper.removeAttribute('style');
    }
    else if (this.app.state === 'play' && this.app.play.state === 'play') {
      const documentHeight = document.documentElement.clientHeight;
      const documentWidth = document.documentElement.clientWidth;
      if (documentHeight-150 < (documentWidth-32)*10/16) {
        this.wrapper.setAttribute('style', `
          width:${(documentHeight-150)*16/10 + 32}px;
        `);
      } else {
        this.wrapper.removeAttribute('style');
      }
    }
    else if (this.app.state === 'editor') {
      const documentHeight = document.documentElement.clientHeight;
      const documentWidth = document.documentElement.clientWidth;
      if (documentHeight-178 < (documentWidth-32)*29/40) {
        this.wrapper.setAttribute('style', `
          width:${(documentHeight-178)*40/29 + 32}px;
        `);
      } else {
        this.wrapper.removeAttribute('style');
      }
    }
  }

  handleMouseScroll(e){
    this.setScrollPos( this.scrollPos + e.deltaY );
  }

  handleMouseMoveOnScrollbar(e){
    if (e.buttons%2 === 1) {
      if (!this.locked) {
        this.locked = true;
        this.scrollbar.requestPointerLock();
      }
      this.setScrollPos(this.scrollPos + e.movementY * 10);
    } else if (this.locked) {
      this.locked = false;
      document.exitPointerLock();
    }
  }

  handleTouchMove(e){
    Object.values(e.changedTouches).forEach( touch => {
      const index = this.ongoingTouch.findIndex( sT => sT.identifier === touch.identifier );
      const savedTouch = this.ongoingTouch[index];
      const movementY = touch.pageY - savedTouch.pageY;
      this.setScrollPos(this.scrollPos - movementY*5);
      this.ongoingTouch[index] = copyTouch(touch);
    } );
  }

  handleTouchStart( e ){
    Object.values(e.changedTouches).forEach( touch => {
      this.ongoingTouch.push( copyTouch(touch) );
    } );
  }

  handleTouchEnd( e ){
    Object.values(e.changedTouches).forEach( touch => {
      const index = this.ongoingTouch.findIndex( sT => sT.identifier === touch.identifier );
      this.ongoingTouch.splice(index, 1);
    } );
  }
}