let users =[];
const requestHandler = (req,res)=> {
  
    const url = req.url;
    const method = req.method;
    
if(url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">')
   res.write(`<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Handler Users</title>
</head>
<body>
    <h1> Hello from The server</h1>

   <form action="/create-user" method="POST">
       <label>USERNAME:</label> <input type="text"  name="user" /> 
       <button type="submit">Creat User</button>
   </form>
   
</body>`)
   res.write('</html>');
   return res.end();
   }
   if(url=== '/create-user' && method === 'POST'){
   
    const body =[];
    req.on('data',(chunk)=>{
        console.log("chunk",chunk)
        body.push(chunk); 
    });

    return req.on('end', ()=>{
         parseBody = Buffer.concat(body).toString();
        const user = parseBody.split('=')[1];
        users.push(user)
       
            res.statusCode = 302;
            res.setHeader('Location','/users');
            return res.end();
    
    });
       
   }
   if(url==='/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">')
    res.write(`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Handler Users</title>
 </head>
 <body>
 <ul>
    `);
   if(users.length <1){
     res.write(`<li>There is no user</li>`);
   }else{
    users.map(user=> res.write(`<li>${user}</li>`));
   }
    res.write('</ul></body></html>');
    return res.end();
   }
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>')
   res.write(`<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Node js Server</title>
</head>
<body>
   <h1>Erore 404! </h1>
</body>`)
   res.write('</html>');
   res.end();
  
};

module.exports = requestHandler;