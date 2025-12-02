const { print, inputFile } = require("../functions.js");

const input = inputFile("./Day1/input.txt").split("\n");

let dialPos = 50;
let zeroCount = 0;

input.forEach((el) => {
    const turns = parseInt(el.slice(1));

    for (let i = 0; i <= turns; i++) {
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
