const print = require("../functions/functions.js");
const fs = require("fs");

const file = fs.readFileSync("input1.txt", "utf-8");
const allIDs = file.replaceAll("\n", "   ").split("   ");

const rightList = []; //odd indexex
const leftList = []; //even indexes
const distances = [];
let total = 0;

for(i = 0; i <= allIDs.length -1; i++){
    // Pushes odd indexes to right list
    if(i % 2 > 0){
        rightList.push(allIDs[i]);
        continue;
    }
    leftList.push(allIDs[i]);
}

rightList.sort();
leftList.sort();

for(i = 0; i <= leftList.length - 1; i++){
    distances.push(Math.abs(leftList[i] - rightList[i]));
}

//easier to read than above for loop
// const distances = leftList.map((element, index) => Math.abs(element - rightList[index]));

distances.forEach(element => total += element);

print(total);