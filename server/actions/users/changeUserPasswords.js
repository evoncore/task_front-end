import User from '../../models/User';

export default (req, res) => {

  User.findOne({login: req.session.user.login}, (err, result) => {
    if (err) console.error(err);

    result.passwords = req.body.passwords;
    result.save((err, result) => {
      if (err) console.error(err);

      res.send(result.passwords);
      res.end();
    });
  });

};