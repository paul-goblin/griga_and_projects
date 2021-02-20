import { GhostyEntity } from '../ghosty_entity';
import { Stone } from './stone';

export class GateStone extends Stone {
  constructor( params, args ){
    super( params, args );
    this.currentImage = params.state || 'closed';
  }

  open(){
    this.currentImage = 'open';
    this.changeLayer( 13 );
    this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0].letEntitiesFallDown(false);
  }

  close(){
    this.currentImage = 'closed';
    this.changeLayer( 17 );
    this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0].moveEntitiesUp( this, false );
  }

  getCurrentParams(){
    const params = GhostyEntity.prototype.getCurrentParams.call(this);
    params.state = this.currentImage;
    return params;
  }

  allowMove( requestChain ){
   if (this.currentImage === 'open') {
     return true;
   } else {
     return GhostyEntity.prototype.allowMove.call(this, requestChain);
   }
  }
}