const fs = require('fs');

const input = fs.readFileSync('./6.txt', 'utf8');

let marker = [];

for (let i = 0; i < input.length; i++) {
  const ch = input[i];
  for (let j = marker.length - 1; j >= 0; j--) {
    if (marker[j] === ch) {
      // only keep items after the last duplicate
      marker = marker.slice(j + 1);
      break;
    }
  }

  marker.push(ch);

  if (marker.length === 4) {
    console.log(i + 1);
    console.log(marker.join(''));
    break;
  }
}
