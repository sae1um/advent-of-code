const { print, inputFile } = require("../functions");

// const input = inputFile("./Day2/test.txt").trim().split(",");
const input = inputFile("./input.txt").trim().split(",");

let invalidSum = 0;
const re = new RegExp("");

function regexSolution() {
    input.forEach((range) => {
        let rangeStart = parseInt(range.split("-")[0]);
        let rangeEnd = parseInt(range.split("-")[1]);

        for (let i = rangeStart; i <= rangeEnd; i++) {
            if (re.test(i.toString())) {
                invalidSum += i;
            }
        }
    });
}

function partOne() {
    input.forEach((range) => {
        let rangeStart = parseInt(range.split("-")[0]);
        let rangeEnd = parseInt(range.split("-")[1]);

        for (let i = rangeStart; i <= rangeEnd; i++) {
            const stringValue = i.toString();
            if (stringValue.length % 2 !== 0) {
                continue; //odd
            }

            const valueLeft = stringValue.slice(0, stringValue.length / 2);
            const valueRight = stringValue.slice(
                stringValue.length / 2,
                stringValue.length
            );
            if (valueLeft === valueRight) invalidSum += parseInt(i);
            // console.log(`left: ${valueLeft}, right: ${valueRight}`);
        }
    });
}

function partTwo() {}

partOne();

// const test = "11885118";
// console.log(test.slice(0, test.length / 2));
// console.log(test.slice(test.length / 2, test.length));

print(invalidSum);
