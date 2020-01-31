const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var interetschema = new Schema({
  name: String,
  lattitude: String,
  longitude: String,
  description: String,
});

interetschema.statics.create = function(packet) {
  var interet = new Interet(packet);
  return interet
    .save()
    .then((okInteret) => {
      return Promise.resolve(okInteret);
    })
    .catch((err) => {
      console.error(
        'Data.create data failed when save ' + packet + ' ==> ',
        err,
      );
      return Promise.reject(err);
    });
};

var Interet;
function make(connection) {
  if (Interet !== undefined) return Interet;
  Interet = connection.model('Interet', interetschema);
  return Interet;
}
module.exports = make;
