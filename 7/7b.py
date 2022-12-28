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

    def findLowestSizeToFree(dirEntry, lastMin, minVal, maxVal):
        res = dirEntry['size'] if (
            dirEntry['size'] < lastMin and
            dirEntry['size'] >= minVal and
            dirEntry['size'] <= maxVal) else lastMin
        for innerDirEntry in dirEntry['children'].values():
            childMin = findLowestSizeToFree(innerDirEntry, res, minVal, maxVal)
            if childMin < res:
                res = childMin
        return res

    freeSpace = 70000000 - dir['/']['size']
    minSpaceToFree = 30000000 - freeSpace
    res = findLowestSizeToFree(
        dir['/'],
        dir['/']['size'],
        minSpaceToFree,
        dir['/']['size']
    )
    print(res)
