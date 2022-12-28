const fs = require('fs');

const input = fs.readFileSync('./8.txt', 'utf8');

const rows = input.split(/\r?\n/);

let maxScenicScore = 0;

const scenicScores = {};

// index at which given tree height's view is blocked by another tree
// value of -1 means that the tree of that height is never blocked
// for a row such as '2310x', where currently tree x is being considered
// [3, 2, 1, 1, -1, ..., -1] - means that:
// tree of height 0 is blocked at index 3; 1 at index 2; 2 and 3 at index 1
// taller trees are not blocked
const heightIndexes = new Array(10).fill(-1);

// check for visible trees left to right and right to left
for (let i = 0; i < rows.length; i++) {
  let maxLtoR = [...heightIndexes];
  for (let j = 0; j < rows[0].length; j++) {
    let height = parseInt(rows[i][j], 10);

    // update scenic score
    // with the difference between current row index and first blocking index
    scenicScores[i + ',' + j] =
      maxLtoR[height] === -1 ? j : j - maxLtoR[height];

    // set the current index to the found height and all lower
    // height, since they will be blocked by this tree as well
    for (let k = 0; k <= height; k++) {
      maxLtoR[k] = j;
    }
  }

  let maxRtoL = [...heightIndexes];
  for (let j = rows[0].length - 1; j >= 0; j--) {
    let height = parseInt(rows[i][j], 10);

    // update scenic score
    // with the difference between current row index and first blocking index
    scenicScores[i + ',' + j] *=
      maxRtoL[height] === -1 ? rows[0].length - 1 - j : maxRtoL[height] - j;

    // set the current index to the found height and all lower
    // height, since they will be blocked by this tree as well
    for (let k = 0; k <= height; k++) {
      maxRtoL[k] = j;
    }
  }
}

// check for visible trees top to bottom and bottom to top
for (let j = 0; j < rows[0].length; j++) {
  let maxTtoB = [...heightIndexes];
  for (let i = 0; i < rows.length; i++) {
    let height = parseInt(rows[i][j], 10);

    // update scenic score
    // with the difference between current col index and first blocking index
    scenicScores[i + ',' + j] *=
      maxTtoB[height] === -1 ? i : i - maxTtoB[height];

    // set the current index to the found height and all lower
    // height, since they will be blocked by this tree as well
    for (let k = 0; k <= height; k++) {
      maxTtoB[k] = i;
    }
  }

  let maxBtoT = [...heightIndexes];
  for (let i = rows.length - 1; i >= 0; i--) {
    let height = parseInt(rows[i][j], 10);

    // update scenic score
    // with the difference between current col index and first blocking index
    scenicScores[i + ',' + j] *=
      maxBtoT[height] === -1 ? rows.length - 1 - i : maxBtoT[height] - i;

    // set the current index to the found height and all lower
    // height, since they will be blocked by this tree as well
    for (let k = 0; k <= height; k++) {
      maxBtoT[k] = i;
    }

    // once scenis score calculation is done, check if max
    if (scenicScores[i + ',' + j] > maxScenicScore) {
      maxScenicScore = scenicScores[i + ',' + j];
    }
  }
}

console.log(maxScenicScore);
