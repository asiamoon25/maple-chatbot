var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config/config');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');

const app = express();

// app.set('port', config.port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log(config.mode);


app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})


module.exports = app;
