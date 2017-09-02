var request = require('request');
var http = require('http');
var Router = require('node-router');
var GoogleFinance = require('google-finance');
var helpers = require('./helpers')

var router = Router();    // create a new Router instance 
var route = router.push;  // shortcut for router.push() 
 
/*Add routes*/
route('GET', '/joke', jokesHandler);         // handle any request to /joke 
 
route('GET', '/v1/news', newsHandler);
route('GET', '/v1/historical', googleHistoricalHandler);
route('GET', '/v2/historical', yahooHistoricalHandler);


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

function googleHistoricalHandler( req, res, next) {
  let path = parseHistoricalPath(req.path);

  return GoogleFinance.historical({
    symbols: path.stocks,
    from: path.start_date,
    to: path.end_date
  }).then((result) => {
    return res.send(result);
  });
}

function yahooHistoricalHandler(req, res, next) {
  let path = parseHistoricalPath(req.path);
  let customRequest = request.defaults({
    jar: true,
    headers: {
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36',
      'cookie': 'B=1bmgkjlcogm23&b=3&s=ki',
      'referrer': `https://finance.yahoo.com/quote/AIG/history?p=${path.stocks[0]}`
    }
  });
  let start_date_epoch = new Date(path.start_date).getTime()/1000;
  let end_date_epoch = new Date(path.end_date).getTime()/1000;
  return customRequest(`https://query1.finance.yahoo.com/v7/finance/download/${path.stocks[0]}?period1=${start_date_epoch}&period2=${end_date_epoch}&interval=1d&events=history&crumb=YbktGh9fEBz`,
    (error, response, body) => {
      res.setHeader('Content-Type', 'application/json');
      let json = helpers.parseCSV(body);
      let formattedJson = helpers._transformHistorical(path.stocks[0], json)
      return res.send(formattedJson);
  });
}

function parseHistoricalPath(path) {
  let items = path.split('/');
  let stocks = items[3].split(',');
  let start_date = items[4];
  let end_date = items[5];
  return {stocks, start_date, end_date};
}

function errorHandler(err, req, res, next) {
  res.send(err);                 // responded, so do not call next() 
}

