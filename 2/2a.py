with open("2.txt") as file:
  rounds = file.read().split('\n')
  finalscore = 0
  for round in rounds:
    roundvals = round.split(' ')
    opponent = ord(roundvals[0])-65
    you = ord(roundvals[1])-65-23
    result = you + 1
    if you == opponent:
      result += 3
    elif (opponent+1)%3 == you:
      result += 6
    finalscore += result
  print(finalscore)