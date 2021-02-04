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
            this.griga.ghosty.editor.sceneChangedHandler();
            entitiesOnTile.forEach( e => e.newEntityWasPlacedOnTile(entity) );
          }
        }
      } else if (sameEntitiesOnTile.length === 1 && ctrlKey) {
        sameEntitiesOnTile[0].delete()
      }
    }
  }
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    if (mouseButtons) {
      this.mouseDownHandler( displayName, mouseC, mouseR, ctrlKey );
    }
  }

  sceneLoadedHandler(){
    if (this.grid.name !== 'play') {return};
    this.sceneChanged = false;
    if (this.c == 0 && this.r == 0) {//keyTrackTile
      this.griga.ghosty.play.keyTrackEntity = this;
      Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
        this.subscribeToKeyDown( key );
      } );
    }
  }

  keyDownHandler( key ){ //keyTrackTile
    const allEntities = this.grid.getEntityInstances( {
      notType: 'BackgroundTile'
    } );
    const taskDoneArray = allEntities.map( e => e.taskDone() );
    if (!taskDoneArray.includes( false )) {
      if (this.grid.getEntityInstances({type:'Goal'})) { //if there exists at least one goal
        this.griga.ghosty.play.levelDone();
      }
    }

    if (this.sceneChanged) {
      this.griga.ghosty.play.updateUndoHistory();
    }

    this.sceneChanged = false;
  }

  includeInSceneData() {
    return false;
  }
}