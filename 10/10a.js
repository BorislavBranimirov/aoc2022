const fs = require('fs');

const input = fs.readFileSync('./10.txt', 'utf8');

const lines = input.split(/\r?\n/);

let X = 1;

let cycle = 1;

let res = 0;

for (const line of lines) {
  const parts = line.split(' ');
  if (cycle <= 220 && (cycle - 20) % 40 === 0) {
    const signalStrength = cycle * X;
    res += signalStrength;
  }

  cycle += 1;

  if (parts[0] === 'addx') {
    if (cycle <= 220 && (cycle - 20) % 40 === 0) {
      const signalStrength = cycle * X;
      res += signalStrength;
    }

    X += parseInt(parts[1], 10);
    cycle += 1;
  }
}

console.log(res);
