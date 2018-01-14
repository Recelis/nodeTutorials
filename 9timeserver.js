var net = require("net");

var server = net.createServer((socket)=>{
    let date = new Date();
    let year = date.getFullYear();
    let month = zeroFill(date.getMonth()+1);
    let day = zeroFill(date.getDate());
    let hour = zeroFill(date.getHours());
    let minutes = zeroFill(date.getMinutes());
    let time = year+"-"+month+"-"+day+" "+hour+":"+minutes + "\n";
    socket.end(time);
})
server.listen(process.argv[2]);

function zeroFill(time){
    if (time.toString().length ===1) return "0" + time;
    return time; 
}