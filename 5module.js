
module.exports =  function (directName, extension, callback){
    var fs = require("fs");
    let matches = [];
    fs.readdir(directName, (err, list)=>{
        if (err) return callback(err);
        // filter by file names
        var regex = new RegExp("."+extension,"g");
        list.map((string)=>{
            if (string.match(regex) !== null) matches.push(string);
        });
        callback(null,matches);
    });
}


