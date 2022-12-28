const fs = require('fs');

const input = fs.readFileSync('./2.txt', 'utf8');

const rounds = input.split(/\r?\n/);

let finalscore = 0;

for (const round of rounds) {
  const roundvals = round.split(' ');
  // set values to be between 0-1 = rock-scissors
  const opponent = roundvals[0].charCodeAt() - 65;
  const you = roundvals[1].charCodeAt() - 65 - 23;
  let result = you + 1; // points for picking x
  if (you === opponent) {
    result += 3; // +3 on draw
  } else if ((opponent + 1) % 3 === you) {
    result += 6; // +6 on win - your choice is 1 higher than opponent
  }
  finalscore += result;
}

console.log(finalscore);
