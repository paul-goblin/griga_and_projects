import { Entity } from '../../griga/entity';

export class GhostyEntity extends Entity {
  constructor( params, args ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    if (args.grid.name === 'selection-hotbar') {
      params = {
        width: 0.8,
        height: 0.8,
        cOffset: 0.1,
        rOffset: 0.1
      }
    } else if (args.grid.name === 'editor') {
      params = {};
    }
    super( params, args );
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
    }
  }

  /**
   * requests a move in the given direction. 
   * @param {*} direction 
   * @param {boolean} automove If true, the entities will move automatically when the move is allowed.
   * @param {*} requestChain 
   */
  requestMove( direction, automove = false, requestChain = []){
    if (requestChain.length > 0) {
      const validation = this.validateMove( direction, automove, requestChain );
      if (!validation[0]) {
        return validation[1];
      }
    }
    requestChain.push([this, direction]);
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const sucesses = entitiesOnTile.map( e => e.requestMove(direction, automove, requestChain) );
    if (sucesses.includes( false )) {
      return false;
    } else {
      if (automove) {
        this.move(absPos);
      }
      return true;
    }
  }

  /**
   * checks if the requested move is valid. Should be overwritten by Child. Returns [doMove, allowMove]
   * @param {*} direction 
   * @param {*} requestChain 
   * @returns {boolean[]}
   */
  validateMove( direction, automove, requestChain = [] ){
    return [false, false];
  }
}