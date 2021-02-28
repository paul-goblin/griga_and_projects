import { Entity } from '../../griga/entity';

export class SelectionBackground extends Entity {
  constructor( params, args ){
    super( {
      mouseDownSubscriptions: ['editor', 'selection'],
    }, args );
    this.otherEntity = null;
    this.lastClickTime = 0;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: '',
             active: './tile_img/selection_background_active_gen_2.jpg'
    };
  }

  setOtherEntity( entityInstance ){
    this.otherEntity = entityInstance;
    entityInstance.addWidthMultiplier( 0.8 );
    entityInstance.addHeightMultiplier( 0.8 );
  }

  activate(){
    this.currentImage = 'active';
  }

  deactivate(){
    this.currentImage = 'deactive';
  }

  mouseDownHandler(){
    if (performance.now()-this.lastClickTime < 300) {
      this.griga.ghosty.editor.selection.showAllEntitiesSelection( this );
    }
    this.lastClickTime = performance.now();
    if (this.otherEntity) {
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