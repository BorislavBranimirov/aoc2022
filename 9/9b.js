const fs = require('fs');

const input = fs.readFileSync('./9.txt', 'utf8');

const lines = input.split(/\r?\n/);

const visitedSpaces = { '0,0': true };

const knots = [];
for (let i = 0; i < 10; i++) {
  knots.push({ x: 0, y: 0 });
}

for (const line of lines) {
  const [dir, count] = line.split(' ');
  for (let i = 0; i < count; i++) {
    const head = knots[0];
    if (dir === 'L') head.x -= 1;
    else if (dir === 'R') head.x += 1;
    else if (dir === 'U') head.y -= 1;
    else if (dir === 'D') head.y += 1;

    for (let j = 1; j < knots.length; j++) {
      const xDiff = knots[j - 1].x - knots[j].x;
      const yDiff = knots[j - 1].y - knots[j].y;

      // knots can have diff=abs(2) in both directions, except with head
      // pair of diffs that cause moves can be:
      // abs(2) in one direction and abs(0) or abs(1) in the other;
      // or abs(2) in both directions
      if (Math.abs(xDiff) === 2) {
        knots[j].x += xDiff / 2;
        if (Math.abs(yDiff) === 1) {
          knots[j].y += yDiff;
        }
      }
      if (Math.abs(yDiff) === 2) {
        knots[j].y += yDiff / 2;
        if (Math.abs(xDiff) === 1) {
          knots[j].x += xDiff;
        }
      }
    }

    const tail = knots[knots.length - 1];
    visitedSpaces[tail.y + ',' + tail.x] = true;
  }
}

console.log(Object.keys(visitedSpaces).length);
