const print = require("../functions/functions.js");
const fs = require("fs");

const file = fs.readFileSync("input1.txt", "utf-8");
const allIDs = file.replaceAll("\n", "   ").split("   ");

const rightList = []; //odd indexes
const leftList = []; //even indexes
let score = 0;

for(i = 0; i < allIDs.length; i++){
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
    let counter = 0;
    for(j = 0; j <= rightList.length - 1; j++){
        if(leftList[i] == rightList[j]){
            counter++;
        }
    }
    if(counter > 0){
        score += leftList[i] * counter;
    }
}

print(score);