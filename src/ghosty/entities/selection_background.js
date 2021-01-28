import { Entity } from '../../griga/entity';

export class SelectionBackground extends Entity {
  constructor( params, args ){
    super( {
      mouseDownSubscriptions: ['selection']
    }, args );
    this.otherEntity = null;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: './tile_img/selection_background.jpg',
             active: './tile_img/selection_background_active.jpg'
    };
  }

  setOtherEntity( entityInstance ){
    this.otherEntity = entityInstance;
  }

  activate(){
    this.currentImage = 'active';
  }

  deactivate(){
    this.currentImage = 'deactive';
  }

  mouseDownHandler(){
    const otherEntities = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},notType:'SelectionBackground'});
    if (otherEntities.length === 1) {
      this.setOtherEntity( otherEntities[0] );
      if (this.currentImage === 'deactive') {
        this.griga.ghosty.selection.setActiveSelectionBackground( this );
      }
      else if (this.currentImage === 'active') {
        this.griga.ghosty.selection.setActiveSelectionBackground( null );
      }
    }
  }
}