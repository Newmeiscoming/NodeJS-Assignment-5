const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    if(req.url==='/welcome'){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Welcome to Dominos!");
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("phone:18602100000, email:guestcaredominos@jublfoods.com");
    
    }
    else {
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("<h1>404 page not found</h1>");
    }
})
server.listen(8081,"127.0.0.1",()=>{
    console.log("Server is listening at port 8081");
})