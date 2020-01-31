const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db_url = process.env.DB_URL || 'mongodb://127.0.0.1:27017/db_cordova10';

var connection;
function tryConnect() {
  connection = mongoose.createConnection(db_url, (err) => {
    if (err) {
      console.error('MongoDB connection error: ', err);
    } else {
      console.log('MongoDB connexion Success');
    }
  });
}
tryConnect();

const Hebergement = require('./Hebergement')(connection);
const Interet = require('./Interet')(connection);

const collections = {
  Hebergement,
  Interet
};

module.exports = collections;
