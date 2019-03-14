const twilio = require('twilio');
const config = require('./twilioConfig');

const accountSid = config.SID; 
const authToken = config.AUTH; 

module.exports = new twilio(accountSid, authToken);