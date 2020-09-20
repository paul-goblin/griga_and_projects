@echo off
echo git pull...
git pull
set /p GAME=Which game do you want to work on?
echo module.exports = "%GAME%"; > currentGame.js
npm start