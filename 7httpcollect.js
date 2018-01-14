const http = require("http");
const bl = require("bl");
let result = "";
let numberOfNewLines = 0;

http.get(process.argv[2], (res)=>{
    res.pipe(bl((err,data)=>{
        if (err) throw err;
        let string = data.toString();
        console.log(string.length);
        console.log(string);
    }));
});

