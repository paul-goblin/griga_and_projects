import { Entity } from '../../griga/entity';

export class Stone extends Entity {
  constructor( params, args ){
    super( {
      
    }, args );
    if (this.grid.name === 'selection-hotbar') {
      this.setWidth(0.8);
      this.setHeight(0.8);
      this.setCOffset(0.1);
      this.setROffset(0.1);
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
      this.selectionBackground.setOtherEntity(this);
    }
  }

  static get imgSources(){
    return { default: './tile_img/stone.png'};
  }
}