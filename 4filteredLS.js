// program prints list of files in directory
// filtered by extension of files
// input file directory, and filter as second argument.

    var fs = require("fs");

    fs.readdir(process.argv[2], (err,list)=>{
        if (err) throw err;
        // filter by file names
        var regex = new RegExp("."+process.argv[3],"g");
        list.map((string)=>{
            if (string.match(regex) !== null) console.log(string);
        });
    });

