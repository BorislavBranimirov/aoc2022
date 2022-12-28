const fs = require('fs');

const input = fs.readFileSync('./1.txt', 'utf8');

const elves = input.split(/\r?\n\r?\n/);

let vals = [0, 0, 0];

for (const elve of elves) {
  const value = elve
    .split(/\r?\n/)
    .map((x) => parseInt(x, 10))
    .reduce((acc, cur) => acc + cur, 0);
  if (value > vals[0]) {
    vals[2] = vals[1];
    vals[1] = vals[0];
    vals[0] = value;
  } else if (value > vals[1]) {
    vals[2] = vals[1];
    vals[1] = value;
  } else if (value > vals[2]) {
    vals[2] = value;
  }
}

console.log(vals.reduce((acc, cur) => acc + cur, 0));
