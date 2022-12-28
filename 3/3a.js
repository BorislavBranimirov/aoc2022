const fs = require('fs');

const input = fs.readFileSync('./3.txt', 'utf8');

const backpacks = input.split(/\r?\n/);

let res = 0;

for (const backpack of backpacks) {
  const counter = {};
  for (let i = 0; i < backpack.length / 2; i++) {
    counter[backpack[i]] = 1;
  }
  for (let i = backpack.length / 2; i < backpack.length; i++) {
    if (counter[backpack[i]] === 1) {
      const ch = backpack[i];
      const chVal = ch.charCodeAt();
      if (chVal >= 97) {
        res += chVal - 'a'.charCodeAt() + 1;
        break;
      } else {
        res += chVal - 'A'.charCodeAt() + 27;
        break;
      }
    }
  }
}

console.log(res);
