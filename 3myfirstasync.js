var fs = require('fs');

let output = fs.readFile(process.argv[2],(err,data)=>{
    if(err) throw err;
    let stringData = data.toString();
    console.log(stringData.split('\n').length-1);
});
