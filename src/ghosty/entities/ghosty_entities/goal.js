import { GhostyEntity } from '../ghosty_entity';

export class Goal extends GhostyEntity {
  constructor( params, args ){
    super( {}, args, 5 );
  }

  static get imgSources(){
    return { default: './tile_img/oil_lamp.png'};
  }

  allowMove(){
    return true;
  }

  entityMovedToTile( entity ){
    if (entity.constructor.name === 'Ghosty') {
      if (this.checkLevelDone()) {
        this.griga.ghosty.levelDone();
      }
    }
  }

  taskDone() {
    let ghosties = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'Ghosty',
    } );
    if (ghosties[0]) {return true};
    return false;
  }

  checkLevelDone(){
    let goals = this.grid.getEntityInstances( {type: 'Goal'} );
    if (!goals.map(goal => goal.taskDone()).includes(false)) {
      this.griga.ghosty.levelDone();
    }
  }
}