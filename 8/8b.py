with open("8.txt") as file:
    rows = file.read().split('\n')

    maxScenicScore = 0

    scenicScores = dict()

    heightIndexes = [-1 for _ in range(10)]

    for i in range(len(rows)):
        maxLtoR = heightIndexes[:]
        for j in range(len(rows[0])):
            height = int(rows[i][j])
            if maxLtoR[height] == -1:
                scenicScores[f'{i},{j}'] = j
            else:
                scenicScores[f'{i},{j}'] = j - maxLtoR[height]
            for k in range(height+1):
                maxLtoR[k] = j

        maxRtoL = heightIndexes[:]
        for j in range(len(rows[0])-1, -1, -1):
            height = int(rows[i][j])
            if maxRtoL[height] == -1:
                scenicScores[f'{i},{j}'] *= len(rows[0]) - 1 - j
            else:
                scenicScores[f'{i},{j}'] *= maxRtoL[height] - j
            for k in range(height+1):
                maxRtoL[k] = j

    for j in range(len(rows[0])):
        maxTtoB = heightIndexes[:]
        for i in range(len(rows)):
            height = int(rows[i][j])
            if maxTtoB[height] == -1:
                scenicScores[f'{i},{j}'] *= i
            else:
                scenicScores[f'{i},{j}'] *= i - maxTtoB[height]
            for k in range(height+1):
                maxTtoB[k] = i

        maxTtoB = heightIndexes[:]
        for i in range(len(rows)-1, -1, -1):
            height = int(rows[i][j])
            if maxTtoB[height] == -1:
                scenicScores[f'{i},{j}'] *= len(rows) - 1 - i
            else:
                scenicScores[f'{i},{j}'] *= maxTtoB[height] - i
            for k in range(height+1):
                maxTtoB[k] = i

            if scenicScores[f'{i},{j}'] > maxScenicScore:
                maxScenicScore = scenicScores[f'{i},{j}']

    print(maxScenicScore)
