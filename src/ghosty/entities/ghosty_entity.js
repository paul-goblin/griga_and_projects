import { Entity } from '../../griga/entity';

export class GhostyEntity extends Entity {
  constructor( params, args, layer = 1 ){
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
    params.layer = layer;
    super( params, args );
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
    }
  }

  move( direction ) {
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    entitiesOnTile.forEach( entity => {
      entity.entityWillMoveToTile( this, direction );
    } );
    Entity.prototype.move.call( this, absPos );
    entitiesOnTile.forEach( entity => {
      entity.entityMovedToTile( this, direction );
    } );
  }

  requestMove( direction, requestChain = [] ) {
    requestChain.push([this, direction]);
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const sucesses = entitiesOnTile.map( e => e.validateMove(requestChain) );
    if (sucesses.includes( false )) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * validates a move in the given direction. Should only be called from GhostyEntity.startMove;
   * @param {*} requestChain 
   */
  validateMove( requestChain ){
    //avoid overflow, just allow move
    if (requestChain.map( a => a[0] ).includes( this )) {
      return true;
    }
    const allowMove = this.allowMove( requestChain );
    return allowMove;
  }

  /**
   * checks if the requested move is valid. Should be overwritten by Child. Returns [request, 
   * @param {*} requestChain 
   * @param {*} direction 
   * @returns {boolean}
   */
  allowMove( requestChain = [] ){
    return false;
  }

  allowPlacing( entity ){
    return entity.layer !== this.layer;
  }

  allowBeingPlaced( tile ){
    return true;
  }

  entityWillMoveToTile( entity, direction ) {
    //doSomething
  }

  entityMovedToTile( entity, direction ) {
    //doSomething
  }
}