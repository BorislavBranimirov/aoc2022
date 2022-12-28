with open('10.txt') as file:
    lines = file.read().split('\n')
    X = 1
    cycle = 1
    res = 0

    for line in lines:
        parts = line.split(' ')
        if cycle <= 220 and (cycle-20) % 40 == 0:
            signalStrength = cycle*X
            res += signalStrength
        cycle += 1

        if parts[0] == 'addx':
            if cycle <= 220 and (cycle-20) % 40 == 0:
                signalStrength = cycle*X
                res += signalStrength

            X += int(parts[1])
            cycle += 1

    print(res)
