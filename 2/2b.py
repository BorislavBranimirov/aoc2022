with open("2.txt") as file:
  rounds = file.read().split('\n')
  finalscore = 0
  for round in rounds:
    roundvals = round.split(' ')
    opponent = ord(roundvals[0])-65
    outcome = ord(roundvals[1])-65-23
    result = outcome * 3
    if roundvals[1] == 'X': 
      result += ((opponent + 2) % 3) + 1
    elif roundvals[1] == 'Y':
      result += opponent + 1
    else:
      result += ((opponent + 1) % 3) + 1
    finalscore += result
  print(finalscore)