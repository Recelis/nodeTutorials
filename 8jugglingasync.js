const after = require("after");
const http = require("http");
const bl = require("bl");


let urls = [process.argv[2],process.argv[3],process.argv[4]];





var updateUser = function(req, res){
    var run = after(3, printResults);
    let results = {};


    http.get(urls[0], (res)=>{
        res.pipe(bl((err,data)=>{
            if (err) throw err;
            results[0] = data.toString();
            run(null,results);
        }));
    });
    
    http.get(urls[1], (res)=>{
        res.pipe(bl((err,data)=>{
            if (err) throw err;
            results[1] = data.toString();
            run(null,results);
        }));
    });
    
    http.get(urls[2], (res)=>{
        res.pipe(bl((err,data)=>{
            if (err) throw err;
            results[2] = data.toString();
            run(null,results);
        }));
    });

    function printResults(){
        for (var ii =0; ii < 3; ii++) console.log(results[ii]);
    }
}

updateUser();




