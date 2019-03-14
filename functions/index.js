const functions = require('firebase-functions');
const createUser = require('./createUser');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceConfig.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-9cc57.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);