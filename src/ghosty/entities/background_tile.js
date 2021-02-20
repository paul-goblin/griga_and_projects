import { Entity } from '../../griga/entity';

export class BackgroundTile extends Entity {
  constructor( params, args ){
    super( {
      width: 0.25,
      height: 0.25,
      cOffset: Math.random()*3/4,
      rOffset: Math.random()*3/4,
      sceneLoadedSubscription: true,
    }, args );
    if (this.grid.name === 'editor') {
      this.subscribeToMouseDown('editor');
      this.subscribeToMouseEnter('editor');
    }
    this.type = params.type || Math.floor(Math.random()*8);
    this.currentImage = 'p' + this.type;
  }

  static get imgSources(){
    return { p0: './tile_img/red_flower.jpg',
             p1: './tile_img/orange_flower.jpg',
             p2: './tile_img/turquoise_flower.jpg',
             p3: './tile_img/light_blue_flower.jpg',
             p4: './tile_img/dark_blue_flower.jpg',
             p5: './tile_img/yellow_flower.jpg',
             p6: './tile_img/pink_flower.jpg',
             p7: './tile_img/purple_flower.jpg',};
  }

  letEntitiesFallDown(jump = true){ //lets all entities fall down (not just solid)
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } );
    let floorLayer = 10;
    if ( entitiesOnTile.find( e => e.constructor.name === 'Hole' ) ){ floorLayer = 0 };
    const highestLayer = Math.max(...entitiesOnTile.map( e => Math.floor(e.layer/10) ))*10;
    const solidEntityOnBaseLayer = [];
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      solidEntityOnBaseLayer[ currentBaseLayer ] = entitiesOnTile.find( e => e.layer === currentBaseLayer+7 );
    }
    let emptyLayers = 0;
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      const entitiesOnBaseLayer = entitiesOnTile.filter( e => Math.floor(e.layer/10)*10 === currentBaseLayer )
      entitiesOnBaseLayer.forEach( e => {
        if (e.moveVertically && emptyLayers > 0) {e.moveVertically(-emptyLayers,jump)}
      } );
      if (!solidEntityOnBaseLayer[currentBaseLayer]) {
        emptyLayers++;
      }
    }

    entitiesOnTile.forEach( e => {
      if (typeof e.updateState === 'function') {
        e.updateState();
      };
    } );
  }

  moveEntitiesUp( stayEntity, jump = true ){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['BackgroundTile', 'Hole', 'HoleBorder'].includes(e.constructor.name) );
    const baseLayer = Math.floor(stayEntity.layer/10)*10
    const entitiesToMoveUp = entitiesOnTile.filter( e => Math.floor(e.layer/10)*10 === baseLayer && e !== stayEntity );
    entitiesToMoveUp.forEach( e => {
      if (e.moveVertically) {e.moveVertically(1,jump)}
    } );
    const solidEntityMovedUp = entitiesToMoveUp.find( e => e.layer%10 === 7 );
    if (solidEntityMovedUp) {
      this.moveEntitiesUp(solidEntityMovedUp);
    }
  }

  mouseDownHandler( displayName, mouseC, mouseR, ctrlKey ){
    if (this.griga.ghosty.editor.popup) {return};

    if (this.griga.ghosty.editor.selection.selectedEntity) {
      const sameEntitiesOnTile = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:  this.griga.ghosty.editor.selection.selectedEntity.constructor.name});
      if (sameEntitiesOnTile.length === 0 && !ctrlKey) {
        const selectedEntity = this.griga.ghosty.editor.selection.selectedEntity;
        const entitiesOnTile = this.grid.getEntityInstances( {
          tile: {c:this.c, r:this.r},
          notType: 'BackgroundTile'
        } );
        if (!entitiesOnTile.map(e => e.allowPlacing( selectedEntity )).includes(false)) {
          if (selectedEntity.allowBeingPlaced( {c:this.c, r:this.r}, this.grid )) {
            const entity = this.grid.newEntityInstance(  selectedEntity.constructor.name, {}, {c:this.c,r:this.r});
            this.letEntitiesFallDown();
            entitiesOnTile.forEach( e => e.newEntityWasPlacedOnTile(entity) );
            this.griga.ghosty.editor.sceneChangedHandler();
          }
        }
      } else if (sameEntitiesOnTile.length === 1 && ctrlKey) {
        sameEntitiesOnTile[0].beforeDelete();
        sameEntitiesOnTile[0].delete();
        this.letEntitiesFallDown();
        const entitiesOnTile = this.grid.getEntityInstances( {
          tile: {c:this.c, r:this.r},
          notType: 'BackgroundTile'
        } );
        entitiesOnTile.forEach( e => e.entityOnSameTileWasDeleted(sameEntitiesOnTile[0]) );
        this.griga.ghosty.editor.sceneChangedHandler();
      }
    }
  }
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    if (mouseButtons) {
      this.mouseDownHandler( displayName, mouseC, mouseR, ctrlKey );
    }
  }

  sceneLoadedHandler(){
    if (this.backgroundSceneLoaded) {
      this.letEntitiesFallDown();
      if (this.grid.name !== 'play') {return};
      this.sceneChanged = false;
      if (this.c == 0 && this.r == 0) {//keyTrackTile
        this.griga.ghosty.play.keyTrackEntity = this;
        this.ghostyAnimationsEnded = 0;
        this.fastMode = false;
        this.xthTimeKeyIsDown = 0;
        this.tilesToUpdate = [];
        Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
          this.subscribeToKeyDown( key );
          this.subscribeToKeyUp( key );
        } );
      }
    } else {
      this.backgroundSceneLoaded = true;
    }
  }

  keyDownHandler( key ){ //keyTrackTile
    this.xthTimeKeyIsDown++;
    const allEntities = this.grid.getEntityInstances( {
      notType: 'BackgroundTile'
    } );
    const goals = this.grid.getEntityInstances( {
      type: 'Goal'
    } );
    this.tilesToUpdate.forEach( tile => {
      this.grid.getEntityInstances( {
        tile, type: 'BackgroundTile'
      } )[0].letEntitiesFallDown();
    } );
    this.tilesToUpdate = [];
    const taskDoneArray = allEntities.map( e => e.taskDone() );
    if (!taskDoneArray.includes( false ) && goals.length > 0 ) {
      if (this.grid.getEntityInstances({type:'Goal'})) { //if there exists at least one goal
        this.griga.ghosty.play.levelDone();
      }
    }

    if (this.sceneChanged) {
      this.griga.ghosty.play.updateUndoHistory();
    }

    this.sceneChanged = false;
  }

  keyUpHandler( key ){
    this.fastMode = false;
  }

  addTilesToUpdate( tiles ) {
    tiles.forEach( t => {
      if (!this.tilesToUpdate.find( uT => uT.c === t.c && uT.r === t.r )) {
        this.tilesToUpdate.push(t);
      }
    } );
  }

  //used to implement the hold-and-move feature
  moveAnimationChainOfGhostyEmptied() {
    this.ghostyAnimationsEnded++;
    const ghosties = this.grid.getEntityInstances({type:'Ghosty'});
    if ( this.ghostyAnimationsEnded === ghosties.length ) {
      this.handleKeyHold();
    }
  }

  handleKeyHold() {
    this.ghostyAnimationsEnded = 0;
    if (!this.fastMode) {
      const currentTimeKeyIsDown = this.xthTimeKeyIsDown;
      setTimeout( (currentTimeKeyIsDown) => {
        console.log(currentTimeKeyIsDown, this.xthTimeKeyIsDown);
        if (this.xthTimeKeyIsDown === currentTimeKeyIsDown) {
          this.fastMode = true;
          this.handleKeyHold();
        }
      }, 100, currentTimeKeyIsDown );
    } else {
      Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
        if (this.griga.keysPressed.includes(key)) {
          this.grid.keyDownHandler({key});
        }
      } );
    }
  }

  includeInSceneData() {
    return false;
  }
}