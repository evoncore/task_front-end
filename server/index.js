import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import webpack from 'webpack';
import config from '../webpack.config.dev';

// routes
import user from './routes/user';
import auth from './routes/auth';

var app = express();
var compiler = webpack(config);

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, '/client/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'KillerIsJim',
  key: 'sid',
  saveUninitialized: true,
  resave: true,
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../client')));

app.use('/user', user);
app.use('/auth', auth);

app.get('*', function(req, res) {
  res.render(path.join(__dirname, '/views/index'));
});

var port = 5000;
app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
