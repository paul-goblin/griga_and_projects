import { Griga } from "../griga/griga";
import { Entity } from "../griga/entity";
const SPEED = 100;

class SnakeH extends Entity{
  constructor( params, args ){
    super({
      keyDownSubscriptions: ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'],
      renderStartSubscription: true,
    }, args);
    this.direction = 'Right';
    this.newDirection = 'Right';
    this.lastMoveTime = performance.now();
  }
  static get imgSources(){
    return { default: './tile_img/snake_h.png' };
  }
  keyDownHandler( key ){
    this.newDirection = key.slice(5);
  }

  renderStartHandler(){
    const timeSinceLastMove = performance.now()-this.lastMoveTime;
    if (timeSinceLastMove > SPEED) {
      this.move( this.direction );
      this.direction = this.newDirection;
      this.lastMoveTime+=100;
      this.cOffset = 0;
      this.rOffset = 0;
    }
    else if (this.direction === 'Right') {
      this.cOffset = timeSinceLastMove/SPEED;
    }
    else if (this.direction === 'Left') {
      this.cOffset = -timeSinceLastMove/SPEED;
    }
    else if (this.direction === 'Down') {
      this.rOffset = timeSinceLastMove/SPEED;
    }
    else if (this.direction === 'Up') {
      this.rOffset = -timeSinceLastMove/SPEED;
    }

  }
};

class Apple extends Entity{
  constructor( params, args ){
    super({}, args);
  }
  static get imgSources(){
    return { default: './tile_img/apple.png' };
  }
};

const config = {
  displays: [
    {name: 'main-display',
    wrapperId: 'main-display', 
    widthHeightRatio: 3/2}
  ],
  grids: [
    {name: 'snake-grid',
    rows: 20,
    columns: 30,}
  ],
  entities: [SnakeH, Apple]
};


new Griga( config, start );

function start( griga ){
  const displaySettings = {
    columnsOnScreen: 30,
    rowsOnScreen: 20,
  }
  griga.displayGrid( 'main-display', 'snake-grid', displaySettings );
  griga.grids['snake-grid'].newEntityInstance('SnakeH', {}, {r:3, c:3});
  griga.grids['snake-grid'].newEntityInstance('Apple', {}, {r:8, c:8});
}

