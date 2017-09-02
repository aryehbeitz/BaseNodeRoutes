var S = require('string');
var _ = require('lodash');
var moment = require('moment');

function parseCSV(text) {
  return S(text).trim().s.split('\n').map(function (line) {
    return S(line).trim().parseCSV();
  });
}

function _transformHistorical(symbol, data) {
  var headings = data.shift();
  return _(data)
    .reverse()
    .map(function (line) {
      var result = {};
      headings.forEach(function (heading, i) {
        var value = line[i];
        if (_.includes(['Volume'], heading)) {
          value = toInt(value, null);
        } else if (_.includes(['Open', 'High', 'Low', 'Close', 'Adj Close'], heading)) {
          value = toFloat(value, null);
        } else if (_.includes(['Date'], heading)) {
          value = toDate(value, null);
          if (value && !moment(value).isValid()) {
            value = null;
          }
        }
        result[camelize(heading)] = value;
      });
      result.symbol = symbol;
      return result;
    })
    .value();
}

function toDate(value, valueForError) {
  try {
    var date = new Date(value);
    if (date.getFullYear() < 1400) { return null; }
    return date;
  } catch (err) {
    if (_.isUndefined(valueForError)) {
      return null;
    } else {
      return valueForError;
    }
  }
}

function toFloat(value, valueForNaN) {
  var result = parseFloat(value);
  if (isNaN(result)) {
    if (_.isUndefined(valueForNaN)) {
      return null;
    } else {
      return valueForNaN;
    }
  } else  {
    return result;
  }
}

function toInt(value, valueForNaN) {
  var result = parseInt(value, 10);
  if (isNaN(result)) {
    if (_.isUndefined(valueForNaN)) {
      return null;
    } else {
      return valueForNaN;
    }
  } else  {
    return result;
  }
}

function camelize(text) {
  return S(text)
    .slugify()
    .camelize()
    .s;
}

function parseHistoricalPath(path) {
  let items = path.split('/');
  let stocks = items[3].split(',');
  let start_date = items[4];
  let end_date = items[5];
  return {stocks, start_date, end_date};
}

exports.camelize = camelize;
exports.parseCSV = parseCSV;
exports.toDate = toDate;
exports.toFloat = toFloat;
exports.toInt = toInt;
exports._transformHistorical = _transformHistorical;
exports.parseHistoricalPath = parseHistoricalPath;
