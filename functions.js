const fs = require("fs");

function print(input){
    console.log(input);
}

const inputFile = (file) => {
    const f = fs.readFileSync(file, "utf-8"); 
    return f;
}
module.exports = {print, inputFile}