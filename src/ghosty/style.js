export class Style {
  constructor(){
    this.scrollbar = document.querySelector('.scrollbar');
    this.scrollbar_box = document.querySelector('.scrollbar-box');
    this.levels_container = document.querySelector('.levels-container');
    this.wrapper = document.querySelector('.wrapper');
    window.addEventListener('resize', e => {
      this.resizeScrollbar();
      this.resizeWrapper();
    });
    this.resizeWrapper();
  }

  setScrollbarHeight(){
    setTimeout( () => {
      const levelsContainerHeight = getComputedStyle(this.levels_container).height;
      this.scrollbar_box.setAttribute('style', `
        height:${levelsContainerHeight};
      `);
      this.levelsContainerHeight = parseInt(levelsContainerHeight.slice(0, -2));
      this.resizeScrollbar();
    }, 1);
  }

  resizeScrollbar(){
    this.scrollHeight = document.documentElement.clientHeight
      - this.levels_container.getBoundingClientRect().top - 20;
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
    if (document.documentElement.clientHeight-150 < (document.documentElement.clientWidth-32)*10/16) {
      this.wrapper.setAttribute('style', `
        width:${(document.documentElement.clientHeight-150)*16/10 + 32}px;
      `);
    } else {
      this.wrapper.removeAttribute('style');
    }
  }
}