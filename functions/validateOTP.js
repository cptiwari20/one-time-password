const admin = require('firebase-admin');

module.exports = function(req, res){
  if(!req.body.phone || !req.body.code){
    return res.status(422).send({ error: 'Please input phone and code'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  const code = parseInt(req.body.code)

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone);
      ref.on('value', snapshot => {
        ref.off(); // stop listening to the database
        const user = snapshot.val();
        if(user.code !== code || !user.codeValid){
          return res.status(422).send({ error:  'Code is not valid'});
        }
        ref.update({codeValid: false})
        // create JWT for the logged in user.
        admin.auth().createCustomToken(phone)
          .then(token => res.send({ token: token}))
      })
    }).catch(e => res.status(422).send({ error: e}))
}