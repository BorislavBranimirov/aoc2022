const fs = require('fs');

const input = fs.readFileSync('./2.txt', 'utf8');

const rounds = input.split(/\r?\n/);

let finalscore = 0;

for (const round of rounds) {
  const roundvals = round.split(' ');
  // set values to be between 0-1 = rock-scissors
  const opponent = roundvals[0].charCodeAt() - 65;
  const outcome = roundvals[1].charCodeAt() - 65 - 23;
  let result = outcome * 3; // x->0*3; y->1*3; z->2*3;
  // calculate index of own handsign + 1
  // sign loses to (sign+1)%3 and beats (sign+2)%3
  if (roundvals[1] === 'X') {
    result += ((opponent + 2) % 3) + 1;
  } else if (roundvals[1] === 'Y') {
    result += opponent + 1;
  } else {
    result += ((opponent + 1) % 3) + 1;
  }
  finalscore += result;
}

console.log(finalscore);
