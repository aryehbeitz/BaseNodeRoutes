var request = require('request');
var http = require('http');
var Router = require('node-router');
var googleFinance = require('google-finance');
 
var router = Router();    // create a new Router instance 
var route = router.push;  // shortcut for router.push() 
 
/*Add routes*/
route('GET', '/joke', jokesHandler);         // handle any request to /joke 
 
// handle all GET and POST requests to /one and /two 
// route('GET', 'POST', '/one', '/two', routeHandler);
 
route(routeHandler);      // catch-all route 
route(errorHandler);      // catch errors from any route above 
 
var server = http.createServer(router).listen(3005);  // launch the server 
 
 
/*Example handler functions*/
function routeHandler(req, res, next) {
	// console.log(res);
	googleFinance.historical({
	  symbol: 'NASDAQ:'+req.path.split('/').pop(),
	  from: '2014-01-01',
	  to: '2016-12-31'
	}, function (err, quotes) {
		res.header('Access-Control-Allow-Origin', '*');
		// res.header = 'Access-Control-Allow-Origin', '*';
		  if (true) res.send(JSON.stringify(quotes));  // respond to request if condition true 
		  else next();                   // otherwise, call next matching route 
		console.log(quotes)
	  //...
	});
	
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