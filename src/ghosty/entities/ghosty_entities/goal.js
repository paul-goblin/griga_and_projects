import { GhostyEntity } from '../ghosty_entity';

export class Goal extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 14 );
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
    if (ghosties[0]) {return Math.floor(ghosties[0].layer/10) === Math.floor( this.layer/10 )};
    return false;
  }
}