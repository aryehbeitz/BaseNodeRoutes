var request = require('request');
var http = require('http');
var Router = require('node-router');
var GoogleFinance = require('google-finance');
 
var router = Router();    // create a new Router instance 
var route = router.push;  // shortcut for router.push() 
 
/*Add routes*/
route('GET', '/joke', jokesHandler);         // handle any request to /joke 
 
route('GET', '/v1/news', newsHandler);
route('GET', '/v1/historical', historicalHandler);


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
  return request('http://api.icndb.com/jokes/random/', (error, response, body) => {
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.parse(body).value.joke);
  });
}

function newsHandler( req, res, next) {
  symbols_list = req.path.split('/').pop().split(',');
  return GoogleFinance.companyNews({symbols: symbols_list })
  .then((result) => {
    return res.send(result);
  });
}

function historicalHandler( req, res, next) {
  let items = req.path.split('/');
  let stocks = items[3].split(',');
  let start_date = items[4];
  let end_date = items[5];

  return GoogleFinance.historical({
    symbols: stocks,
    from: start_date,
    to: end_date
  }).then((result) => {
    return res.send(result);
  });
}

 
function errorHandler(err, req, res, next) {
  res.send(err);                 // responded, so do not call next() 
}