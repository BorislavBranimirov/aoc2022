// solution that just iterates left,right,up,down for each grid character

const fs = require('fs');

const input = fs.readFileSync('./8.txt', 'utf8');

const rows = input.split(/\r?\n/);

let maxScenicScore = 0;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[0].length; j++) {
    let height = parseInt(rows[i][j], 10);
    let score = 1;

    let count = 0;
    for (let tempIndex = j - 1; tempIndex >= 0; tempIndex--) {
      count += 1;
      if (parseInt(rows[i][tempIndex], 10) >= height) break;
    }
    score *= count;

    count = 0;
    for (let tempIndex = j + 1; tempIndex < rows[0].length; tempIndex++) {
      count += 1;
      if (parseInt(rows[i][tempIndex], 10) >= height) break;
    }
    score *= count;

    count = 0;
    for (let tempIndex = i - 1; tempIndex >= 0; tempIndex--) {
      count += 1;
      if (parseInt(rows[tempIndex][j], 10) >= height) break;
    }
    score *= count;

    count = 0;
    for (let tempIndex = i + 1; tempIndex < rows.length; tempIndex++) {
      count += 1;
      if (parseInt(rows[tempIndex][j], 10) >= height) break;
    }
    score *= count;

    if (maxScenicScore < score) maxScenicScore = score;
  }
}

console.log(maxScenicScore);
