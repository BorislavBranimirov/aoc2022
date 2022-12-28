const fs = require('fs');

const input = fs.readFileSync('./5.txt', 'utf8');

const [stackInputs, moves] = input
  .split(/\r?\n\r?\n/)
  .map((arr) => arr.split(/\r?\n/));

const stacks = [[]];

// for (const stackInput of stackInputs) {
//   if (stackInput[1] === '1') break;
//   let ptr = 0;
//   let currentColumn = 0;
//   while (ptr < stackInput.length - 1) {
//     let emptySpace = 0;
//     while (stackInput[ptr] === ' ') {
//       emptySpace += 1;
//       ptr += 1;
//       if (emptySpace % 4 === 0) {
//         currentColumn += 1;
//       }
//     }
//     ptr += 1; // skip [
//     if (ptr >= stackInput.length - 1) break;
//     const ch = stackInput[ptr];
//     while (stacks.length < currentColumn + 1) {
//       stacks.push([]);
//     }
//     stacks[currentColumn].unshift(ch);
//     currentColumn += 1;
//     ptr += 3;
//   }
// }

for (const stackInput of stackInputs) {
  if (stackInput[1] === '1') break;
  let currentColumn = 0;
  for (let ptr = 1; ptr < stackInput.length - 1; ptr += 4) {
    if (stackInput[ptr] === ' ') {
      currentColumn += 1;
      continue;
    } else {
      const ch = stackInput[ptr];
      while (stacks.length < currentColumn + 1) {
        stacks.push([]);
      }
      stacks[currentColumn].unshift(ch);
      currentColumn += 1;
    }
  }
}

let res = '';

for (const move of moves) {
  const [_, count, from, to] = move
    .split(/move | from | to /)
    .map((x) => parseInt(x, 10));
  const moved = stacks[from - 1].splice(-count);
  stacks[to - 1].push(...moved);
}

for (const stack of stacks) {
  res += stack[stack.length - 1];
}

console.log(res);
