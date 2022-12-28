const fs = require('fs');

const input = fs.readFileSync('./3.txt', 'utf8');

const backpacks = input.split(/\r?\n/);

let res = 0;

for (let i = 0; i < backpacks.length; i += 3) {
  const counter = {};
  for (let j = 0; j < backpacks[i].length; j++) {
    counter[backpacks[i][j]] = 1;
  }
  for (let j = 0; j < backpacks[i + 1].length; j++) {
    if (counter[backpacks[i + 1][j]] === 1) {
      counter[backpacks[i + 1][j]] += 1;
    }
  }
  for (let j = 0; j < backpacks[i + 2].length; j++) {
    if (counter[backpacks[i + 2][j]] === 2) {
      const ch = backpacks[i + 2][j];
      const chVal = ch.charCodeAt();
      if (chVal >= 97) {
        res += chVal - 'a'.charCodeAt() + 1;
      } else {
        res += chVal - 'A'.charCodeAt() + 27;
      }
      break;
    }
  }
}

console.log(res);
