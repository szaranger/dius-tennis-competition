const Match = require('./Match');

const match = new Match('Player 1', 'Player 2');

match.pointWonBy('Player 1');
match.pointWonBy('Player 2');
match.score();

match.pointWonBy('Player 1');
match.pointWonBy('Player 1');
match.score();

match.pointWonBy('Player 2');
match.pointWonBy('Player 2');
match.score();

match.pointWonBy('Player 1');
match.score();

match.pointWonBy('Player 1');
match.score();