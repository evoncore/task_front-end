import User from '../../models/User';

export default (req, res) => {

  User.findOne({login: req.body.user.login}, (err, result) => {
    if (err) console.error(err);

    if (result) {
      result.passwords.forEach((el) => {
        if (req.body.user.password == el) {
          req.session.user = result;

          var send = {
            id: result._id,
            login: result.login
          };

          res.send(send);
          res.end();
        }
      });
    } else {
      res.send('wrong login or password');
      res.end();
    }
  });

};