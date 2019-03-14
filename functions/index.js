const functions = require('firebase-functions');
const admin = require('firebase-admin');
const createUser = require('./createUser');
const serviceAccount = require('./serviceConfig.json');
const requestOTP = require('./request_one_time_password');
const validateOTP = require('./validateOTP');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-9cc57.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOTP = functions.https.onRequest(requestOTP);
exports.requestOTP = functions.https.onRequest(validateOTP);

