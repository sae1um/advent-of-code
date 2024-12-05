const fs = require("fs");

function print(input){
    console.log(input);
}

function readFile(file){
    return fs.readFileSync(file, "utf-8");
}
module.exports = {print, readFile}