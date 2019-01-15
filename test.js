const Match = require('./Match');

const match = new Match('Player 1', 'Player 2');

match.pointWonBy('Player 1');
match.pointWonBy('Player 2');

test('Points won: Player 1, Player 2, Expected: 0-0, 15-15', '0-0, 15-15', match.score(true))

match.pointWonBy('Player 1');
match.pointWonBy('Player 1');
test('Points won: Player 1, Player 1, Expected: 0-0, 40-15', '0-0, 40-15', match.score(true))

match.pointWonBy('Player 2');
match.pointWonBy('Player 2');
test('Points won: Player 2, Player 2, Expected: 0-0, Deuce', '0-0, Deuce', match.score(true))

match.pointWonBy('Player 1');
test('Points won: Player 1, Expected: 0-0, Advantage Player 1', '0-0, Advantage Player 1', match.score(true))

match.pointWonBy('Player 1');
test('Points won: Player 1, Expected: 1-0', '1-0', match.score(true))

function test(msg, a, b) {
  if (a === b) {
    console.log(msg, '\x1b[42m', 'Pass', '\x1b[0m');
  } else {
    console.log(msg, '\x1b[41m', 'Fail', '\x1b[0m');
  }
}

/*
0-0, 15-15
0-0, 40-15
0-0, Deuce
0-0, Advantage Player 1
1-0
*/