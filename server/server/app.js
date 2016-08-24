var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var _ = require('lodash')
var debug = require('debug')('server:server');
var http = require('http');
var server = http.createServer(app);
var utils = require('./utils')
var port = utils.normalizePort(process.env.PORT || '3003');
app.set('port', port);
var expressWs = require('express-ws')(app,server);


// view engine setup
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
	var routes = require(__dirname+'/routes/'+file)
	app.use('/',routes)
});




// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.send({
      message: err.message,
      error: err
    });
  });
}
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.send({
      message: err.message,
      error: {}
    });
});


server.listen(port);
console.log('listening on port:'+port)
//app.listen(3000);


