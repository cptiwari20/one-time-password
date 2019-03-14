const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res){
  if(!req.body.phone){
    return res.status(422).send({ error: 'No phone number found!'})
  }
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin.auth().getUser(phone)
    .then(user => {
      const code = Math.floor((Math.random() * 8999 + 1000))

      twilio.messages.create({
        body: 'Warning! Please do not share this code with anyone. Your code is ' + code,
        to: phone, 
        from: '+13344685421'
      })
    .then((message) => console.log(message.sid));

    }).catch(err => res.status(422).send({error: err}))
}