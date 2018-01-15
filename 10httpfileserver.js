var http = require("http");
var fs = require("fs");

var textFile = process.argv[3];
var port = process.argv[2];

var server = http.createServer((req,res)=>{
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(textFile).pipe(res);
})
server.listen(port)

// fs.createReadStream(textFile)