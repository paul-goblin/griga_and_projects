import { GhostyEntity } from '../ghosty_entity';

export class PressurePlate extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 13 );
    this.gatesName = params.gates;
    this.state = params.state || 'up';
    this.currentImage = this.state;
  }

  release(){
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (!downs.includes(false)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.close() );
    }
    this.state = this.currentImage = 'up';

  }

  press(){
    this.state = this.currentImage = 'down';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (!downs.includes(false)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.open() );
    }
  }

  getCurrentParams(){
    const params = GhostyEntity.prototype.getCurrentParams.call(this);
    params.state = this.currentImage;
  }

  allowMove(){
    return true;
  }

  updateState(){
    const entityOnTop = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
    } ).filter( e => e.layer === this.layer+4 )[0];
    if (!entityOnTop && this.state === 'down') {
      this.release();
    } else if (entityOnTop && this.state === 'up') {
      this.press();
    }
  }

  beforeDelete(){
    //check if all remaining pressure plates are down
  }
}