import { Entity } from '../../griga/entity';
import { SelectionBackground } from './selection_background';

export class AllEntitiesBackground extends SelectionBackground {
  constructor( params, args ){
    super( {}, args );
    this.otherEntity = null;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: '',
             active: './tile_img/selection_background_active_gen_2.jpg'
    };
  }

  mouseDownHandler(){
    if (this.otherEntity) {
      this.griga.ghosty.editor.selection.selectEntityFromAll( this.otherEntity );
    }
  }
}