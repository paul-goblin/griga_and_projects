import { Griga } from "../griga/griga";
import { Entity } from "../griga/entity";
import levels from "./levels.json";

var mode = "play";
var selectedBlock;
var currentlvl = 0

document.getElementById("levelCreate").addEventListener("click", function(){
  document.getElementById("levelCreate").innerHTML = mode
  if(mode == "play"){ mode = "levelCreate"}
  else{mode = "play"}
})
document.getElementById("selectWall").addEventListener("click", function(){
  selectedBlock == "Walls"
})
document.getElementById("selectFakeWall").addEventListener("click", function(){
  selectedBlock = "fakeWall"
})
document.getElementById("selectLavaPit").addEventListener("click", function(){
  selectedBlock = "lavaPit"
})
document.getElementById("selectDestination").addEventListener("click", function(){
  selectedBlock = "destination"
})
document.getElementById("selectStart").addEventListener("click", function(){
  selectedBlock = "start";
})
document.getElementById("save").addEventListener("click", function(){
  console.log(JSON.stringify(griga.grids["dungeon"].getCurrentSceneData()))
})
document.getElementById("restart").addEventListener("click", function(){
  document.getElementById("main-display").innerHTML = "..."
  const griga = new Griga(config, start);
})
document.getElementById("nextLevel").addEventListener("click", function(){
  currentlvl += 1
  griga.grids['dungeon'].loadScene( levels[currentlvl] );
})


class Warrior extends Entity{
  constructor(params, args){
    super({
      keyDownSubscriptions:['ArrowUp','ArrowDown','ArrowLeft','ArrowRight']
    }, args);
  }
  static get imgSources(){
    return { default: './tile_img/snake_h.png' };
  }
  keyDownHandler( key ){
    console.log( key );
    if(mode == "play"){
      var target = this.grid.getAbsPos(this.c, this.r, key.slice(5))
      var x = this.grid.getEntityInstances( {
        tile: target
      } ).map( instance => instance.constructor.name )
      if(!x.includes("Walls")){
        this.move(key.slice(5));
        if(x.includes("destination")){
          console.log("Finished, you won!!!")
          document.getElementById("main-display").innerHTML = "You won!!!"
        }
      }
    }
  }
}

class destination extends Entity{
  constructor(params, args){
    super({}, args)
  }
  static get imgSources(){
    return {default: './tile_img/track_flag.png'}
  }
}

class Field extends Entity{
  constructor(params, args){
    super({
      mouseDownSubscriptions: ['main-display']
    }, args)
  }

  mouseDownHandler(){
    console.log( this.c, this.r );
    if(mode=="levelCreate"){
      this.grid.newEntityInstance(selectedBlock, {}, {c:this.c, r:this.r})
    }
  }
}

class Walls extends Entity{
  constructor(params, args){
    super({}, args)
  }
  static get imgSources(){
    return { default: './tile_img/castle_wall.png' }
  }
}

class FakeWalls extends Entity{
  constructor(params, args){
    super({}, args)
  }
  static get imgSources(){
    return { default: '/tile_img/castle_wall.png '}
  }
}

const config={
  displays: [
    {name: 'main-display',
    wrapperId: 'main-display', 
    widthHeightRatio: 3/2}
  ],
  grids: [
    {name: 'dungeon',
    rows: 20,
    columns: 30,}
  ],
  entities: [Warrior, Walls, destination, Field]
};

const griga = new Griga(config, start);


function start(){
  const displaySettings = {
    columnsOnScreen: 30,
    rowsOnScreen: 20,
  }
  griga.displayGrid( 'main-display', 'dungeon', displaySettings );
  
  griga.grids['dungeon'].loadScene( levels[0] );
  for(var c = 0; c < 30; c++){
    for(var r = 0; r < 20; r++){
      griga.grids['dungeon'].newEntityInstance("Field", {}, {c, r});
    }
  }
}
