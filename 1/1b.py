with open("1.txt") as file:
  elves = file.read().split('\n\n')
  vals = [0,0,0]
  for elve in elves:
    value = sum(map(lambda x: int(x), elve.split('\n')))
    if value > vals[0]:
      vals[2] = vals[1]
      vals[1] = vals[0]
      vals[0] = value
    elif value > vals[1]:
      vals[1] = vals[0]
      vals[1] = value
    elif value > vals[2]:
      vals[2] = value
  print(sum(vals))