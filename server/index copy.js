const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url)

    if(req.url ==='/'){//home page
 res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>this is my website </h1>");
    }
    if(req.url ==='/api'){//host our DB
 res.writeHead(200,{'Content-Type':'text/html'});
    res.end("mydb.json");
    }
   
}).listen(5959,()=>console.log("server is running"));
