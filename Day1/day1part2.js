const { print, inputFile } = require("../functions.js");

const input = inputFile(
    String.raw`C:\Users\thene\Documents\GitHub\advent-of-code\Day1\input.txt`,
    "r",
    (encoding = "utf-8")
).split("\n");

let dialPos = 50;
let zeroCount = 0;

input.forEach((el) => {
    const turns = parseInt(el.slice(1));

    for (let i = 0; i < turns; i++) {
        if (el[0] == "L") {
            dialPos -= 1;
        } else {
            dialPos += 1;
        }
        if (Math.abs(dialPos % 100) == 0) {
            zeroCount++;
        }
    }
});

print(zeroCount);
