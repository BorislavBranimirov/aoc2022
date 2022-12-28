with open("7.txt") as file:
    lines = file.read().split('\n')
    dir = {'/': {'size': 0, 'children': {}}}
    currentDir = []

    def getDirEntry(path):
        entry = dir['/']
        for subdir in path:
            entry = entry['children'][subdir]
        return entry

    for line in lines:
        parts = line.split(' ')
        if parts[0] == '$':
            if parts[1] == 'cd':
                if parts[2] == '/':
                    currentDir = []
                elif parts[2] == '..':
                    currentDir.pop()
                else:
                    currentDir.append(parts[2])
        else:
            if parts[0] == 'dir':
                currentDirEntry = getDirEntry(currentDir)
                currentDirEntry['children'][parts[1]] = {
                    'size': 0, 'children': {}
                }
            else:
                currentDirEntry = dir['/']
                currentDirEntry['size'] += int(parts[0])
                for subdir in currentDir:
                    currentDirEntry = currentDirEntry['children'][subdir]
                    currentDirEntry['size'] += int(parts[0])

    def dfs(dirEntry):
        res = dirEntry['size'] if (dirEntry['size'] <= 100000) else 0
        for innerDirEntry in dirEntry['children'].values():
            res += dfs(innerDirEntry)
        return res
    print(dfs(dir['/']))
