const fs = require("fs");

function print(input){
    console.log(input);
}

const parseFile = (file) => {
    fs.readFileSync(file, "utf-8");
    const f = file.split(" ");
    return f;
}
module.exports = {print, parseFile}