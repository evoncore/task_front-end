import User from '../../models/User';

export default (req, res) => {

  if (req.session.user) {
    User.findOne({login: req.session.user.login}, (err, result) => {
      if (err) console.error(err);

      res.send(result.passwords);
      res.end();
    });
  } else {
    res.end('forbidden');
  }

};