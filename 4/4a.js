const fs = require('fs');

const input = fs.readFileSync('./4.txt', 'utf8');

const pairs = input.split(/\r?\n/);

let res = 0;

for (const pair of pairs) {
  const elves = pair
    .split(',')
    .map((elf) => elf.split('-').map((x) => parseInt(x, 10)));

  if (
    (elves[0][0] >= elves[1][0] && elves[0][1] <= elves[1][1]) ||
    (elves[0][0] <= elves[1][0] && elves[0][1] >= elves[1][1])
  ) {
    res += 1;
  }
}

console.log(res);
