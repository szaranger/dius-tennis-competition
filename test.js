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

function test(msg, a, b) {
  console.log(msg);
  return a === b;
}

/*
0-0, 15-15
0-0, 40-15
0-0, Deuce
0-0, Advantage Player 1
1-0
*/