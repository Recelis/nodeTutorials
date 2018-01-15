var http = require("http");
var map = require("through2-map");

var port = process.argv[2];

var server = http.createServer((req,res)=>{
    if (req.method !== 'POST'){
        return res.end("send me a POST\n");
    }
   req.pipe(map(function(data){
       return data.toString().toUpperCase(); 
   })).pipe(res);
    // res.writeHead(200, { 'content-type': 'text/plain' })
})
server.listen(port);