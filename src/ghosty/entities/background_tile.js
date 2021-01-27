import { Entity } from '../../griga/entity';

export class BackgroundTile extends Entity {
  constructor( params, args ){
    super( {
      
    }, args );
    if (this.grid.name === 'editor') {
      this.subscribeToMouseDown('editor');
      this.subscribeToMouseEnter('editor');
      this.selection = params.selection;
    }
    this.type = params.type || Math.floor(Math.random()*8);
    this.currentImage = 'p' + this.type;
  }

  static get imgSources(){
    return { p0: './tile_img/background_flowers_0.jpg',
             p1: './tile_img/background_flowers_1.jpg',
             p2: './tile_img/background_flowers_2.jpg',
             p3: './tile_img/background_flowers_3.jpg',
             p4: './tile_img/background_flowers_4.jpg',
             p5: './tile_img/background_flowers_5.jpg',
             p6: './tile_img/background_flowers_6.jpg',
             p7: './tile_img/background_flowers_7.jpg',};
  }

  mouseDownHandler( displayName, mouseC, mouseR, ctrlKey ){
    if (this.selection.selectedEntity) {
      const stonesOnTile = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:  this.selection.selectedEntity.constructor.name});
      if (stonesOnTile.length === 0 && !ctrlKey) {
        this.grid.newEntityInstance(  this.selection.selectedEntity.constructor.name, {}, {c:this.c,r:this.r});
      } else if (stonesOnTile.length === 1 && ctrlKey) {
        stonesOnTile[0].delete()
      }
    }
  }
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    if (mouseButtons) {
      this.mouseDownHandler( displayName, mouseC, mouseR, ctrlKey );
    }
  }
}