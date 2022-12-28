with open("3.txt") as file:
    backpacks = file.read().split('\n')
    res = 0
    for backpack in backpacks:
        counter = dict()
        for i in range(int(len(backpack)/2)):
            counter[backpack[i]] = 1
        for i in range(int(len(backpack)/2), len(backpack)):
            if backpack[i] in counter:
                ch = backpack[i]
                chVal = ord(ch)
                if chVal >= 97:
                    res += chVal - ord('a') + 1
                    break
                else:
                    res += chVal - ord('A') + 27
                    break
    print(res)
