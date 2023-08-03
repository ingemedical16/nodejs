// nodejd Core Modules
/***
 * Http  --> Launch a server, send requests.
 * Https  --> Launch a SSL server, send requests
 * fs -->
 * path -->
 * os -->
 */

const http = require('http');
const routes = require('./routes')

/** function rqListener (req,res){
    console.log(req.url,req.method,req.headers);
    process.exit();
}*/

const server = http.createServer(routes);

server.listen(3000);