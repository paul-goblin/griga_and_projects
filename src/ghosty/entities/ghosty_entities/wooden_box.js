import { GhostyEntity } from '../ghosty_entity';

export class WoodenBox extends GhostyEntity {
  constructor( params, args ){
    super( params, args, 17 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/wooden_box.jpg'};
  }

  static getUnlockLevel( classicLevels ){
    const level = classicLevels.find( l => l.name = 'Boxes' );
    const levelIndex = classicLevels.indexOf( level );
    return levelIndex;
  }

  allowMove(requestChain){
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    } else if (requestChain.length === 1) {
      return this.requestMove(requestChain[0][1], requestChain);
    } else {
      return false;
    }
  }

  entityWillMoveToTile( entity, direction ) {
    if ( this.layer === entity.layer ){
      this.move( direction );
    }
  }
}