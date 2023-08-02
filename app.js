// nodejd Core Modules
/***
 * Http  --> Launch a server, send requests.
 * Https  --> Launch a SSL server, send requests
 * fs -->
 * path -->
 * os -->
 */

const http = require('http');
const fs = require('fs');
/** function rqListener (req,res){
    console.log(req.url,req.method,req.headers);
    process.exit();
}*/

const server = http.createServer((req,res)=> {
    const url = req.url;
    const method = req.method;
   if(url==='/'){
    res.write('<html lang="en">')
   res.write(`<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Enter Message</title>
</head>
<body>
   <form action="/message" method="POST">
       <input type="text"  name="msg" /> 
       <button type="submit">Send</button>
   </form>
   
</body>`)
   res.write('</html>');
   return res.end();
   }
   if(url=== '/message' && method === 'POST'){
   
    const body =[];
    req.on('data',(chunk)=>{
        console.log("chunk",chunk)
        body.push(chunk); 
    });

    return req.on('end', ()=>{
         parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        console.log(message);
        fs.writeFile('message.txt', message,(err)=>{
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    });
       
   }
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>')
   res.write(`<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Node js Server</title>
</head>
<body>
   <h1>hello from Node js  server</h1>
</body>`)
   res.write('</html>');
   res.end();
});

server.listen(3000);