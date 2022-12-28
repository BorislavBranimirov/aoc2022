with open("9.txt") as file:
    lines = file.read().split('\n')

    visitedSpaces = {'0,0': True}

    class Coordinates:
        def __init__(self, x, y):
            self.x = x
            self.y = y

    head = Coordinates(0, 0)
    tail = Coordinates(0, 0)

    for line in lines:
        (direction, count) = line.split(' ')
        for i in range(int(count)):
            if direction == 'L':
                head.x -= 1
            elif direction == 'R':
                head.x += 1
            elif direction == 'U':
                head.y -= 1
            elif direction == 'D':
                head.y += 1

            xDiff = head.x - tail.x
            yDiff = head.y - tail.y

            if abs(xDiff) == 2:
                tail.x += int(xDiff/2)
                tail.y += yDiff
            elif abs(yDiff) == 2:
                tail.y += int(yDiff/2)
                tail.x += xDiff

            visitedSpaces[f'{tail.y},{tail.x}'] = True

    print(len(visitedSpaces))
