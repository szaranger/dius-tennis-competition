const Player = require('./Player');
const Game = require('./Game');

class Match {
  constructor(name1, name2) {
    if (!name1 || !name2) {
      console.error('Two players required');
      return;
    }

    const player1 = new Player(name1);
    const player2 = new Player(name2);
  
    this.players = [player1, player2];
    this.currentGame = null;

    this.start();
  }

  start() {
    console.clear();
    this.currentGame = new Game(this.players);
    return this.currentGame;
  }
  
  pointWonBy(player) {
    return this.currentGame.pointWonBy(player);
  }

  score(isTest = false) {
    const result = this.currentGame.score()
    if (!isTest) {
      console.log(result);
    }

    return result;
  }
}

module.exports = Match;