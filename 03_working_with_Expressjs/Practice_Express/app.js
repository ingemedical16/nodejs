/**
 * 1 - Create a npm project and install Express.js (Nodemon if you want)
 * 2 - Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response
 * 3 - Handle requests to "/" and "/users" such that each request has one handler/middleware that does something with it (e.g send dummy)
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// 2 - 
// app.use((req,res,next)=>{
//     console.log("The first middleware");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("The second middleware");
//     res.send("<h1> Hello from second Midaleware")
// });

// 3 - 

const home = require('./routes/home');
const users = require('./routes/users');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(home);
app.use(users);




app.use((req,res,next)=>{
        res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);