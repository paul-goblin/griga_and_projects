import { Entity } from '../../griga/entity';

export class SelectionBackground extends Entity {
  constructor( params, args ){
    super( {
      mouseDownSubscriptions: ['selection'],
    }, args );
    this.otherEntity = null;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: '',
             active: './tile_img/selection_background_active_gen_2.jpg'
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
        this.griga.ghosty.editor.selection.setActiveSelectionBackground( this );
      }
      else if (this.currentImage === 'active') {
        this.griga.ghosty.editor.selection.setActiveSelectionBackground( null );
      }
    }
  }

  updateSize( entityOnTop ){
    Entity.prototype.setCOffset.call( entityOnTop, this.cOffset + this.width*0.1 );
    Entity.prototype.setROffset.call( entityOnTop, this.cOffset + this.height*0.1 );
    Entity.prototype.setWidth.call( entityOnTop, this.width*0.8 );
    Entity.prototype.setHeight.call( entityOnTop, this.height*0.8 );
  }
}