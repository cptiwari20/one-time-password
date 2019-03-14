const twilio = require('twilio');

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

module.exports = new twilio(accountSid, authToken);