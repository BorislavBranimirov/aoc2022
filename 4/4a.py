with open("4.txt") as file:
    pairs = file.read().split('\n')
    res = 0
    # for pair in pairs:
    #     elves = [int(x) for elf in pair.split(',') for x in elf.split('-')]
    for pair in pairs:
        elves = [[int(x) for x in elf.split('-')] for elf in pair.split(',')]

        if ((elves[0][0] >= elves[1][0] and elves[0][1] <= elves[1][1]) or
                (elves[0][0] <= elves[1][0] and elves[0][1] >= elves[1][1])):
            res += 1
    print(res)
