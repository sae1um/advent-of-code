const {print, readFile} = require("../functions/functions.js");

const file = readFile("input2.txt");
const allReports = file.replaceAll("\n", "").split("\r");

// const reports = [
//     "7 6 4 2 1",
//     "1 2 7 8 9",
//     "9 7 6 2 1",
//     "1 3 2 4 5",
//     "8 6 4 4 1",
//     "1 3 6 7 9"
// ];

const isRowSafe = (level) => {
    level = level.split(" ");
    isIncreasing = level[0] < level[1];
    trueCount = 0;
    for(i = 0; i < level.length -1; i++){
        currNum = level[i];
        nextNum = level[i + 1]
        diff = isIncreasing ? nextNum - currNum : currNum - nextNum;
        if(diff >= 1 && diff <= 3){
            // print("continue");
            trueCount++;
        }else{
            // print("false")
            return false
        }
        if(trueCount == level.length -1){
            // print(level)
            // print("isSafe")
            return true
        }
    }
    // print(isIncreasing)
}

const answer = () => {
    let safeCount = 0;
    allReports.forEach((el, index) => {
        if(isRowSafe(el)){
            safeCount++;
            // print(`safecount: ${safeCount}`)
        }
    })
    return safeCount;
}

print(answer());