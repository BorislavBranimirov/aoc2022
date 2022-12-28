const fs = require('fs');

const input = fs.readFileSync('./8.txt', 'utf8');

const rows = input.split(/\r?\n/);

let res = 0;

const visible = {};

// check for visible trees left to right and right to left
for (let i = 1; i < rows.length - 1; i++) {
  let maxLtoR = parseInt(rows[i][0], 10);
  for (let j = 1; j < rows[0].length - 1; j++) {
    let height = parseInt(rows[i][j], 10);
    if (height > maxLtoR) {
      maxLtoR = height;
      visible[i + ',' + j] = true;
      res += 1;
    }
  }

  let maxRtoL = parseInt(rows[i][rows[0].length - 1], 10);
  for (let j = rows[0].length - 2; j > 0; j--) {
    let height = parseInt(rows[i][j], 10);
    if (height > maxRtoL) {
      maxRtoL = height;
      // check if tree was counted as visible already
      if (!visible[i + ',' + j]) {
        visible[i + ',' + j] = true;
        res += 1;
      }
    }
  }
}

// check for visible trees top to bottom and bottom to top
for (let j = 1; j < rows[0].length - 1; j++) {
  let maxTtoB = parseInt(rows[0][j], 10);
  for (let i = 1; i < rows.length - 1; i++) {
    let height = parseInt(rows[i][j], 10);
    if (height > maxTtoB) {
      maxTtoB = height;
      // check if tree was counted as visible already
      if (!visible[i + ',' + j]) {
        visible[i + ',' + j] = true;
        res += 1;
      }
    }
  }

  let maxBtoT = parseInt(rows[rows.length - 1][j], 10);
  for (let i = rows.length - 2; i > 0; i--) {
    let height = parseInt(rows[i][j], 10);
    if (height > maxBtoT) {
      maxBtoT = height;
      // check if tree was counted as visible already
      if (!visible[i + ',' + j]) {
        visible[i + ',' + j] = true;
        res += 1;
      }
    }
  }
}

// add the borders to the final result
res += 2 * rows[0].length + 2 * (rows.length - 2);

console.log(res);
