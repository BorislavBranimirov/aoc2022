const fs = require('fs');

const input = fs.readFileSync('./7.txt', 'utf8');

const lines = input.split(/\r?\n/);

const dir = { '/': { size: 0, children: {} } };

let currentDir = [];

const getDirEntry = (path) => {
  let entry = dir['/'];
  for (const subdir of path) {
    entry = entry.children[subdir];
  }
  return entry;
};

for (const line of lines) {
  const parts = line.split(' ');
  if (parts[0] === '$') {
    if (parts[1] === 'cd') {
      if (parts[2] === '/') {
        currentDir = [];
      } else if (parts[2] === '..') {
        currentDir.pop();
      } else {
        currentDir.push(parts[2]);
      }
    }
  } else {
    if (parts[0] === 'dir') {
      const currentDirEntry = getDirEntry(currentDir);
      currentDirEntry.children[parts[1]] = { size: 0, children: {} };
    } else {
      // add file size to each parent directory
      let currentDirEntry = dir['/'];
      currentDirEntry.size += parseInt(parts[0], 10);
      for (const subdir of currentDir) {
        currentDirEntry = currentDirEntry.children[subdir];
        currentDirEntry.size += parseInt(parts[0], 10);
      }
    }
  }
}

const dfs = (dirEntry) => {
  let res = dirEntry.size <= 100000 ? dirEntry.size : 0;
  for (const [_, innerDirEntry] of Object.entries(dirEntry.children)) {
    res += dfs(innerDirEntry);
  }
  return res;
};

console.log(dfs(dir['/']));
