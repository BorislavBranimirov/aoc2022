with open("1.txt") as file:
  elves = file.read().split('\n\n')
  maxval = 0
  for elve in elves:
    value = sum(map(lambda x: int(x), elve.split('\n')))
    if value > maxval:
      maxval = value
  print(maxval)