import express from 'express';
import fetchUserPasswords from '../actions/users/fetchPasswords';
import changeUserPasswords from '../actions/users/changeUserPasswords';

var router = express.Router();

router
  .post('/passwords/edit', (req, res) => {
    changeUserPasswords(req, res);
  })
  .post('/passwords', (req, res) => {
    fetchUserPasswords(req, res);
  });

export default router;