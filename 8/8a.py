with open("8.txt") as file:
    rows = file.read().split('\n')

    res = 0

    visible = dict()

    for i in range(1, len(rows)-1):
        maxLtoR = int(rows[i][0])
        for j in range(1, len(rows[0])-1):
            height = int(rows[i][j])
            if height > maxLtoR:
                maxLtoR = height
                visible[f'{i},{j}'] = True
                res += 1

        maxRtoL = int(rows[i][-1])
        for j in range(len(rows[0])-2, 0, -1):
            height = int(rows[i][j])
            if height > maxRtoL:
                maxRtoL = height
                if f'{i},{j}' not in visible:
                    visible[f'{i},{j}'] = True
                    res += 1

    for j in range(1, len(rows[0])-1):
        maxTtoB = int(rows[0][j])
        for i in range(1, len(rows)-1):
            height = int(rows[i][j])
            if height > maxTtoB:
                maxTtoB = height
                if f'{i},{j}' not in visible:
                    visible[f'{i},{j}'] = True
                    res += 1

        maxBtoT = int(rows[-1][j])
        for i in range(len(rows)-2, 0, -1):
            height = int(rows[i][j])
            if height > maxBtoT:
                maxBtoT = height
                if f'{i},{j}' not in visible:
                    visible[f'{i},{j}'] = True
                    res += 1

    res += 2*len(rows[0])+2*(len(rows)-2)

    print(res)
