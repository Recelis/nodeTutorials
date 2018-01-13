var fs = require('fs');

let output = fs.readFileSync(process.argv[2]);
let str = output.toString();
// get number of newlines
let newlines = str.split("\n");
console.log(newlines.length-1);