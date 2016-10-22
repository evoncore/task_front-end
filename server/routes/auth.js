import express from 'express';
import userSignIn from '../actions/users/userSignIn';
import createUser from '../actions/users/createUser';

var router = express.Router();

router
  .post('/check', (req, res) => {
    if (req.session.user) {
      var send = {
        id: req.session.user._id,
        login: req.session.user.login
      };

      res.send(send);
      res.end();
    } else {
      res.send(false);
      res.end();
    }
  })
  .get('/sign-out', (req, res) => {
    req.session.user = undefined;
    res.redirect('/');
  })
  .post('/sign-up', (req, res) => {
    createUser(req, res);
  })
  .post('/sign-in', (req, res) => {
    userSignIn(req, res);
  });

export default router;