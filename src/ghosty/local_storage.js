export class LocalStorage {
  constructor( app ){
    this.app = app;
    if (!localStorage.getItem('ghosty-all-your-level-names')) {
      localStorage.setItem('ghosty-all-your-level-names', '[]');
    }
    if (!localStorage.getItem(`ghosty-highest-levels:`)) {
      localStorage.setItem(`ghosty-highest-levels:`, '{}');
    }
    if (!localStorage.getItem(`ghosty-last-shown-version:`)) {
      localStorage.setItem(`ghosty-last-shown-version:`, '1.0.0');
    }
  }

  setupLevelSolvedForCategory( category ){
    if (!localStorage.getItem(`ghosty-levels-solved-in:${category}`)) {
      localStorage.setItem(`ghosty-levels-solved-in:${category}`, '[]');
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
      return this.saveNewLevel( level, index+1 );
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
    this.removeLevelSolved( levelName, 'yourLevels' );
  }

  saveLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    if (!solvedLevels.includes(levelName)) {
      solvedLevels.push( levelName );
      localStorage.setItem( `ghosty-levels-solved-in:${category}`, JSON.stringify( solvedLevels ) );
    }
  }

  removeLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    if (solvedLevels.includes(levelName)) {
      solvedLevels.splice( solvedLevels.indexOf( levelName ) );
      localStorage.setItem( `ghosty-levels-solved-in:${category}`, JSON.stringify( solvedLevels ) );
    }
  }

  getLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    return solvedLevels.includes( levelName );
  }

  getNumberOfLevelsSolved( category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    return solvedLevels.length;
  }

  saveHighestLevel( levelName, category ){
    const highestLevel = JSON.parse(localStorage.getItem('ghosty-highest-levels:'));
    highestLevel[category] = levelName;
    localStorage.setItem( 'ghosty-highest-levels:', JSON.stringify( highestLevel ) );
  }

  getHighestLevel( category ){
    const highestLevel = JSON.parse(localStorage.getItem('ghosty-highest-levels:'));
    return highestLevel[category];
  }

  getLastShownVersion(){
    const lastShownVersion = localStorage.getItem('ghosty-last-shown-version');
    return lastShownVersion;
  }

  setLastShownVersion( version ){
    localStorage.setItem('ghosty-last-shown-version', version);
  }
}