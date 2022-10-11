
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


require('./config/connection')

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req,res,next)=>{
  const error  = new Error("Not Found!!");
  error.status=404;
  next(error)
});

app.use((error,req,res,next)=>{
  let statusCode = res.statusCode ? res.statusCode : error.status;
  res.status(statusCode||500).json({
      error:{
          status:statusCode||500,
          message:error.message||"Internal server error"
      }
  })
});

module.exports = app;
