const fs = require('fs');

const input = fs.readFileSync('./10.txt', 'utf8');

const lines = input.split(/\r?\n/);

let X = 1;

let cycle = 1;

let CRT = '';

const drawToCRT = (X, cycle) => {
  let CRTLineLength = 40;
  let CRTOutput = '';

  let rowIndex = (cycle - 1) % CRTLineLength;
  if (rowIndex >= X - 1 && rowIndex <= X + 1) {
    CRTOutput += '#';
  } else {
    CRTOutput += '.';
  }

  if (rowIndex === CRTLineLength - 1) {
    CRTOutput += '\n';
  }

  return CRTOutput;
};

for (const line of lines) {
  const parts = line.split(' ');

  CRT += drawToCRT(X, cycle);

  cycle += 1;

  if (parts[0] === 'addx') {
    CRT += drawToCRT(X, cycle);

    X += parseInt(parts[1], 10);
    cycle += 1;
  }
}

console.log(CRT);
