// module file that does the same things as before

var mymodule = require("./5module.js");


var directory = process.argv[2];
var extension = process.argv[3];


mymodule(directory, extension, function callback(err, data){
    if (err) throw err;
    for (var ii in data){
        console.log(data[ii]);
    }
    }
);

