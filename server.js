var request = require('request');
var http = require('http');
var Router = require('node-router');
 
var router = Router();    // create a new Router instance 
var route = router.push;  // shortcut for router.push() 
 
/*Add routes*/
route('GET', '/joke', jokesHandler);         // handle any request to /hello 
 
// handle all GET and POST requests to /one and /two 
// route('GET', 'POST', '/one', '/two', routeHandler);
 
route(routeHandler);      // catch-all route 
route(errorHandler);      // catch errors from any route above 
 
var server = http.createServer(router).listen(3000);  // launch the server 
 
 
/*Example handler functions*/
function routeHandler(req, res, next) {
  if (true) res.send('Hello!');  // respond to request if condition true 
  else next();                   // otherwise, call next matching route 
}

function jokesHandler(req, res, next) {
  return request('http://api.icndb.com/jokes/random/', function (error, response, body) {
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.parse(body).value.joke);
  });
}
 
function errorHandler(err, req, res, next) {
  res.send(err);                 // responded, so do not call next() 
}