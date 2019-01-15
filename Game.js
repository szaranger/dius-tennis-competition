class Game {
  constructor(players = []) {
    this.players = players;
    this.isDeuce = false;
    this.advantage = { isAdvantage: false, name: '' };
    this.isSetComplete = false;
  }

  pointWonBy(name) {
    let p1, p2;
    const player = this.players.find(p => p.name === name);
    const index = this.players.findIndex(p => p.name === name);
    
    this.players.forEach(p => {
      if (p.name === name) {
        p1 = p;
      } else {
        p2 = p;
      }
    });
      
    if (player.pointsWon === 0) {
      player.pointsWon = 15;
    } else if (player.pointsWon === 15) {
      player.pointsWon = 30;
    } else if (player.pointsWon === 30) {
      player.pointsWon = 40;
      
      if(p2 && p2.pointsWon === 40) {
        this.isDeuce = true;
      }
    } else if (player.pointsWon === 40) {
      if (this.isDeuce) {
        this.isDeuce = false;
        this.advantage = { 
          isAdvantage: true,
          name: player.name
        }
      } else if (this.advantage) {
        this.isSetComplete = true;
      }
    } 
  }

  score() {
    const scoreLine = `${this.players[0].pointsWon}-${this.players[1].pointsWon}`;

    if (this.isSetComplete) {
      return '1-0'; 
    } else if (this.advantage.isAdvantage) {
      return `0-0, Advantage ${this.advantage.name}`;
    } else if (this.isDeuce) {
      return `0-0, Deuce`; 
    }

    return `0-0, ${scoreLine}`;
  }
};

module.exports = Game;