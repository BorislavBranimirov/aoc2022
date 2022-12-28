with open("6.txt") as file:
    chars = [ch for ch in file.read()]
    marker = []
    for i, ch in enumerate(chars):
        for j in range(len(marker)-1, -1, -1):
            if marker[j] == ch:
                marker = marker[j+1:]
                break
        marker.append(ch)
        if len(marker) == 4:
            print(i+1)
            print(''.join(marker))
            break
