import re

with open("5.txt") as file:
    (stackInputs, moves) = [[lines for lines in part.split('\n')]
                            for part in file.read().split('\n\n')]
    stacks = [[]]

    # for stackInput in stackInputs:
    #     if stackInput[1] == '1':
    #         break
    #     ptr = 0
    #     currentColumn = 0
    #     while ptr < len(stackInput)-1:
    #         emptySpace = 0
    #         while ptr < len(stackInput) - 1 and stackInput[ptr] == ' ':
    #             emptySpace += 1
    #             ptr += 1
    #             if emptySpace % 4 == 0:
    #                 currentColumn += 1
    #         ptr += 1
    #         if ptr >= len(stackInput) - 1:
    #             break
    #         ch = stackInput[ptr]
    #         while len(stacks) < currentColumn + 1:
    #             stacks.append([])
    #         stacks[currentColumn].insert(0, ch)
    #         currentColumn += 1
    #         ptr += 3

    for stackInput in stackInputs:
        if stackInput[1] == '1':
            break
        currentColumn = 0
        for ptr in range(1, len(stackInput)-1, 4):
            if stackInput[ptr] == ' ':
                currentColumn += 1
                continue
            else:
                ch = stackInput[ptr]
                while len(stacks) < currentColumn + 1:
                    stacks.append([])
                stacks[currentColumn].insert(0, ch)
                currentColumn += 1
    res = ''

    for move in moves:
        (count, fromIndex, toIndex) = [int(x)
                                       for x in re.split('from | to', move[5:])]
        moved = stacks[fromIndex-1][-count:]
        del stacks[fromIndex-1][-count:]
        stacks[toIndex-1].extend(moved)
    for stack in stacks:
        res += stack[-1]
    print(res)
