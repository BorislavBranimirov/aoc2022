with open("9.txt") as file:
    lines = file.read().split('\n')

    visitedSpaces = {'0,0': True}

    class Coordinates:
        def __init__(self, x, y):
            self.x = x
            self.y = y

    knots = [Coordinates(0, 0) for _ in range(10)]

    for line in lines:
        (direction, count) = line.split(' ')
        for i in range(int(count)):
            head = knots[0]
            if direction == 'L':
                head.x -= 1
            elif direction == 'R':
                head.x += 1
            elif direction == 'U':
                head.y -= 1
            elif direction == 'D':
                head.y += 1

            for j in range(1, len(knots)):
                xDiff = knots[j - 1].x - knots[j].x
                yDiff = knots[j - 1].y - knots[j].y

                if abs(xDiff) == 2:
                    knots[j].x += int(xDiff/2)
                    if abs(yDiff) == 1:
                        knots[j].y += yDiff
                if abs(yDiff) == 2:
                    knots[j].y += int(yDiff/2)
                    if abs(xDiff) == 1:
                        knots[j].x += xDiff

            tail = knots[-1]
            visitedSpaces[f'{tail.y},{tail.x}'] = True

    print(len(visitedSpaces))
