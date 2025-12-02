const { print, inputFile } = require("../functions.js");

const input = inputFile("./Day1/input.txt").split("\n");

let dialPos = 50;
let zeroCount = 0;
// 0 - 99
// Left -ive, Right +ive

input.forEach((el) => {
    const turns = parseInt(el.slice(1));

    if (el[0] == "L") {
        dialPos -= turns;
    } else {
        dialPos += turns;
    }
    if (Math.abs(dialPos % 100) == 0) {
        zeroCount++;
    }
});
print(zeroCount);
// print(Math.abs(-200 % 100));
