with open('10.txt') as file:
    lines = file.read().split('\n')
    X = 1
    cycle = 1
    CRT = ''

    def drawToCRT(X, cycle):
        CRTLineLength = 40
        CRTOutput = ''

        rowIndex = (cycle-1) % CRTLineLength
        if rowIndex >= X - 1 and rowIndex <= X + 1:
            CRTOutput += '#'
        else:
            CRTOutput += '.'

        if rowIndex == CRTLineLength - 1:
            CRTOutput += '\n'

        return CRTOutput

    for line in lines:
        parts = line.split(' ')
        CRT += drawToCRT(X, cycle)
        cycle += 1

        if parts[0] == 'addx':
            CRT += drawToCRT(X, cycle)
            X += int(parts[1])
            cycle += 1

    print(CRT)
