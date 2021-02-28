import { GhostyEntity } from '../ghosty_entity';

export class WoodenBox extends GhostyEntity {
  constructor( params, args, shape ){
    super( params, args, 17, shape );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
  }

  static get imgSources(){
    return { default: './tile_img/wooden_box.jpg'};
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Boxes' );
    return levelIndex;
  }

  allowMove(requestChain){
    if (requestChain.length === 1) {
      return this.requestMove(requestChain[0][1], requestChain);
    } else {
      return false;
    }
  }

  entityWillMoveToTile( entity, direction ) {
    if ( this.layerAddend === entity.layerAddend ){
      this.move( direction, true );
      entity.addAnimationFunction( 'move', () => {
        const timePassed = performance.now()-this.animationFunctions['move'][0].startTime;
        this.removeAnimationFunction('move', timePassed, 'dummyAnimationFunction');
        entity.removeAnimationFunction('move', 0);
      } );
    }
  }
}