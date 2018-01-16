var http = require("http");
var url = require("url");

var port = process.argv[2];


var server = http.createServer((req, res)=>{
    if (req.method !== "GET") return res.end("please send a GET request!\n");
    let urlObj = url.parse(req.url,true);
    if (urlObj.pathname === "/api/parsetime"){
        let date = new Date(urlObj.query.iso);
        let resObj = {
            "hour":date.getHours(),
            "minute":date.getMinutes(),
            "second":date.getSeconds()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resObj));
    }
    else if (urlObj.pathname === "/api/unixtime"){
        let date = new Date(urlObj.query.iso);
        let resObj = {
            "unixtime":date.getTime()
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resObj));
    }
    else{
        res.writeHead(404)
        res.end("please send me a request with a proper path name!");
    }
})
server.listen(port);