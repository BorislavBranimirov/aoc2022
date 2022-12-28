const fs = require('fs');

const input = fs.readFileSync('./9.txt', 'utf8');

const lines = input.split(/\r?\n/);

const visitedSpaces = { '0,0': true };

const head = { x: 0, y: 0 };
const tail = { x: 0, y: 0 };

for (const line of lines) {
  const [dir, count] = line.split(' ');
  for (let i = 0; i < count; i++) {
    if (dir === 'L') head.x -= 1;
    else if (dir === 'R') head.x += 1;
    else if (dir === 'U') head.y -= 1;
    else if (dir === 'D') head.y += 1;

    const xDiff = head.x - tail.x;
    const yDiff = head.y - tail.y;

    // pair of diffs that cause moves can be:
    // abs(2) in one direction and abs(0) or abs(1) in the other
    if (Math.abs(xDiff) === 2) {
      tail.x += xDiff / 2;
      tail.y += yDiff;
    } else if (Math.abs(yDiff) === 2) {
      tail.y += yDiff / 2;
      tail.x += xDiff;
    }

    visitedSpaces[tail.y + ',' + tail.x] = true;
  }
}

console.log(Object.keys(visitedSpaces).length);
