var express = require("express");
var http = require("http");

var app = express();

app.use((req, res)=>{
   res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Hello world!\n");
});
http.createServer(app).listen(80);