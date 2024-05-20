// console.log("Segunda feira")
let http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/hmtl"})
    res.end("Segunda Feira")
}).listen(5000)