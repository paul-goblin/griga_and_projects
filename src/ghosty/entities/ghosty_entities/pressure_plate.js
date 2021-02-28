import { GhostyEntity } from '../ghosty_entity';

export class PressurePlate extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 13, 'pressure_plate' );
    this.gatesName = params.gates;
    this.state = params.state || 'up';
    this.logicGate = params.logicGate || 'AND';
    this.currentImage = this.state;
  }

  release(){
    this.state = this.currentImage = 'up';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (this.logicGate === 'AND'
      ||this.logicGate === 'OR' && !downs.includes(true)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.close() );
    }
  }

  press(){
    this.state = this.currentImage = 'down';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (this.logicGate === 'AND' && !downs.includes(false)
      ||this.logicGate === 'OR') {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.open() );
    }
  }

  getCurrentParams(){
    const params = GhostyEntity.prototype.getCurrentParams.call(this);
    params.state = this.currentImage;
    return params;
  }

  allowMove(){
    return true;
  }

  updateState(){
    const entitiesOnTop = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile', this.constructor.name].includes(e.constructor.name) );
    const entityOnTop = entitiesOnTop.find( e => e.layerAddend === this.layerAddend );
    if (!entityOnTop && this.state === 'down') {
      this.release();
    } else if (entityOnTop && this.state === 'up') {
      this.press();
    }
  }

  allowPlacing( entity ){
    return ![3, 4, 7].includes(entity.layer%10);
  }

  beforeDelete(){
    //check if all remaining pressure plates are down
  }
}