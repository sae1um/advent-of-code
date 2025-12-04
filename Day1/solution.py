part_1 = 0
part_2 = 0
pos = 50

with open(r"C:\Users\thene\Documents\GitHub\advent-of-code\Day1\input.txt", "r", encoding="utf-8") as input_file:
    lines = [line.strip() for line in input_file]

for line in lines:
    inputs = (direction := line[:1], amt := int(line[1:]))

    if direction == "R":
        for _ in range(amt):
            pos += 1
            pos %= 100
            part_2 += 1 if pos == 0 else 0
    else:
        for _ in range(amt):
            pos -= 1
            pos %= 100
            part_2 += 1 if pos == 0 else 0

    if pos == 0:
        part_1 += 1

print(f"Part 1: {part_1}")
print(f"Part 2: {part_2}")
