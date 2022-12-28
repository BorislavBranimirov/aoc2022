with open("3.txt") as file:
    backpacks = file.read().split('\n')
    res = 0
    for i in range(0, len(backpacks), 3):
        counter = dict()
        for j in range(len(backpacks[i])):
            counter[backpacks[i][j]] = 1
        for j in range(len(backpacks[i+1])):
            if backpacks[i+1][j] in counter and counter[backpacks[i+1][j]] == 1:
                counter[backpacks[i+1][j]] += 1
        for j in range(len(backpacks[i+2])):
            if backpacks[i+2][j] in counter and counter[backpacks[i+2][j]] == 2:
                ch = backpacks[i+2][j]
                chVal = ord(ch)
                if chVal >= 97:
                    res += chVal - ord('a') + 1
                else:
                    res += chVal - ord('A') + 27
                break
    print(res)
