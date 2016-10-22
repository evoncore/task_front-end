import User from '../../models/User';

export default (req, res) => {

  User.findOne({login: req.body.newUser.login}, (err, result) => {
    if (err) console.error(err);

    if (result) {
      res.send('user exists');
      res.end();
    } else {
      var user = new User({
        login: req.body.newUser.login,
        passwords: [req.body.newUser.password]
      });
      user.save();

      var send = {
        id: user._id,
        login: user.login
      };

      req.session.user = user;
      res.send(send);
      res.end();
    }
  });

};