var http = require('http');
var fs = require('fs');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("THe date and time are currently: " + dt.myDateTime() + ' ');
    var output = fs.readFile('demofile1.html', function(err, data) {
    	if (err) throw err;
    	return data;
    });
    res.write(output);
    res.write('Hello World!');
    res.write(req.url);
    res.end();
}).listen(8080); 
