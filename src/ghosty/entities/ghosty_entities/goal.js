import { GhostyEntity } from '../ghosty_entity';

export class Goal extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 14 );
  }

  static get imgSources(){
    return { default: './tile_img/oil_lamp.png'};
  }

  allowMove(){
    return true;
  }

  taskDone() {
    let ghosties = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'Ghosty',
    } );
    if (ghosties[0]) {return true};
    return false;
  }
}