const fs = require('fs');

const input = fs.readFileSync('./1.txt', 'utf8');

const elves = input.split(/\r?\n\r?\n/);

let maxval = 0;

for (const elve of elves) {
  const value = elve
    .split(/\r?\n/)
    .map((x) => parseInt(x, 10))
    .reduce((acc, cur) => acc + cur, 0);
  if (value > maxval) {
    maxval = value;
  }
}

console.log(maxval);
