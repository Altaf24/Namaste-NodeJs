const http = require("node:http");

const server = http.createServer(function(req,res){
    res.end("Hello Piter");
}

);

server.listen(7777);