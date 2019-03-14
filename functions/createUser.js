const admin = require('firebase-admin');

module.exports = function(req, res){
  // verify the user provided the phone number
  if(!req.body.phone){
    return res.status(422).send({ error: "Bad input"});
  }
  // format that phone number and remove the dashes and symbol
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  
  // create user using that phone number
  admin.auth().createUser({ uid: phone})
    .then((user) => res.send(user))
    .then(err => res.status(422).send({error: err}));


}