const { print, inputFile } = require("../functions.js");

const input = inputFile(
    String.raw`C:\Users\thene\Documents\GitHub\advent-of-code\Day1\input.txt`,
    "r",
    (encoding = "utf-8")
).split("\n");

let pos = 50;
let part_1 = 0;
let part_2 = 0;

input.forEach((line) => {
    direction = line[0];
    const amt = parseInt(line.slice(1));

    if (direction == "R") {
        for (let i = 0; i < amt; i++) {
            pos += 1;
            pos %= 100;
            if (pos == 0) part_2++;
        }
    } else {
        for (let i = 0; i < amt; i++) {
            pos -= 1;
            while (pos < 0) pos += 100;
            if (pos == 0) part_2++;
        }
    }

    if (pos == 0) part_1++;
});

print(`Part 1: ${part_1}`);
print(`Part 2: ${part_2}`);
