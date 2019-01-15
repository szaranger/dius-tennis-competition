class Player {
  constructor(name) {
    this.name = name;
    this.pointsWon = 0;
    this.gamesWon = 0;
  }

  static setPointsWon(points) { 
    return this.pointsWon = points; 
  }

  static getPointsWon() { 
    return this.pointsWon; 
  }
}

module.exports = Player;