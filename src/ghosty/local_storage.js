export class LocalStorage {
  constructor( app ){
    this.app = app;
    if (!localStorage.getItem('ghosty-all-your-level-names')) {
      localStorage.setItem('ghosty-all-your-level-names', '[]');
    }
  }

  // if the level.name exists, it increments index until the level.name does not exist
  renameLevel( oldName, newName, difficulty, creator, index = 0 ){
    let indexString = '';
    if (index) { indexString = ` ${index}` }
    const newItemKey = `ghosty-your-level:${newName+indexString}`;
    if (localStorage.getItem(newItemKey) && oldName !== newName) {
      return this.renameLevel( oldName, newName, difficulty, creator, index+1 );
    } else {
      const oldItemKey = `ghosty-your-level:${oldName}`;
      const level = JSON.parse(localStorage.getItem(oldItemKey));
      level.name = newName+indexString;
      level.difficulty = difficulty;
      level.creator = creator;
      const levelString = JSON.stringify(level);
      localStorage.setItem( newItemKey, levelString );
      if (oldName !== newName) {
        localStorage.removeItem( oldItemKey );
      }
      const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
      const index = allLevelNames.indexOf(oldName);
      allLevelNames.splice(index, 1, newName+indexString);
      localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
      return level.name;
    }
  }

  saveLevel( level ){
    const itemKey = `ghosty-your-level:${level.name}`;
    const levelString = JSON.stringify(level);
    localStorage.setItem( itemKey, levelString );
  }

  // if the level.name exists, it increments index until the level.name does not exist
  saveNewLevel( level, index = 0 ){
    let indexString = '';
    if (index) { indexString = ` ${index}` }
    const itemKey = `ghosty-your-level:${level.name+indexString}`;
    if (localStorage.getItem(itemKey)) {
      return this.saveLevel( level, index+1 );
    } else {
      level.name += indexString;
      const levelString = JSON.stringify(level);
      localStorage.setItem( itemKey, levelString );
      const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
      allLevelNames.push(level.name);
      localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
      return level;
    }
  }

  getYourLevels(){
    const yourLevels = [];
    const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
    allLevelNames.forEach( levelName => {
      const level = JSON.parse( localStorage.getItem(`ghosty-your-level:${levelName}`) );
      yourLevels.push( level );
    } );
    return yourLevels;
  }

  deleteLevel( levelName ){
    const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
    const index = allLevelNames.indexOf( levelName );
    allLevelNames.splice( index, 1 );
    localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
    localStorage.removeItem(`ghosty-your-level:${levelName}`);
  }
}