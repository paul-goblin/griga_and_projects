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
    let entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => e.constructor.name !== 'BackgroundTile' );
    let floorLayer = 10;
    let emptyLayersForStoneShape = 0;
    if ( entitiesOnTile.find( e => ['Hole', 'HoleCircle'].includes(e.constructor.name) ) ){ floorLayer = 0 };
    if ( entitiesOnTile.find( e => e.constructor.name === 'HoleCircle' )){ emptyLayersForStoneShape = -1 };
    entitiesOnTile = entitiesOnTile.filter( e => !['Hole', 'HoleBorder', 'HoleCircle'].includes(e.constructor.name) );
    const highestLayer = Math.max(...entitiesOnTile.map( e => 10+e.layerAddend ));
    const solidEntityOnBaseLayer = [];
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      solidEntityOnBaseLayer[ currentBaseLayer ] = entitiesOnTile.find( e => 10+e.layerAddend === currentBaseLayer && e.layer%10 === 7);
    }
    let emptyLayers = 0;
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      const entitiesOnBaseLayer = entitiesOnTile.filter( e => 10+e.layerAddend === currentBaseLayer );
      entitiesOnBaseLayer.forEach( e => {
        if (e.moveVertically && emptyLayers > 0) {
          if (!(e.shape === 'stone' && emptyLayersForStoneShape <= 0)){
            e.moveVertically(-emptyLayers,jump);
          }
        }
      } );
      if (!solidEntityOnBaseLayer[currentBaseLayer]) {
        emptyLayers++;
        emptyLayersForStoneShape++;
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
    const baseLayer = 10 + stayEntity.layerAddend;
    const entitiesToMoveUp = entitiesOnTile.filter( e => 10+e.layerAddend === baseLayer && e !== stayEntity );
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
        this.fastMode = {};
        this.timesKeyIsReleased = {};
        this.tilesToUpdate = [];
        Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
          this.subscribeToKeyDown( key );
          this.subscribeToKeyUp( key );
          this.timesKeyIsReleased[key] = 0;
          this.fastMode[key] = false;
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
        setTimeout(() => this.griga.ghosty.play.levelDone(), 200);
      }
    }

    if (this.sceneChanged) {
      this.griga.ghosty.play.updateUndoHistory();
    }

    this.sceneChanged = false;
  }

  keyUpHandler( key ){
    this.fastMode[key] = false;
    this.timesKeyIsReleased[key]++;
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

  handleKeyHold() { //almost works, probably some issue cause of keys getting stuck (griga);
    this.ghostyAnimationsEnded = 0;

    Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
      if (this.griga.keysPressed.includes(key)) {
        if (this.fastMode[key]) {
          this.grid.keyDownSubscriptions[key].forEach( entity => {
            entity.keyDownHandler( key, true );
          } );;
        } else {
          const currentTimeKeyIsUp = this.timesKeyIsReleased[key];
          setTimeout( (currentTimeKeyIsUp) => {
            if (currentTimeKeyIsUp === this.timesKeyIsReleased[key]) {
              this.fastMode[key] = true;
              this.handleKeyHold();
            }
          }, 200, currentTimeKeyIsUp );
        }
      }
    } );
  }

  includeInSceneData() {
    return false;
  }
}