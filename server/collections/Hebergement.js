const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var hebergementschema = new Schema({
  name: String,
  lattitude: String,
  longitude: String,
  description: String,
});

hebergementschema.statics.create = function(packet) {
  var hebergement = new Hebergement(packet);
  return hebergement
    .save()
    .then((okHebergement) => {
      return Promise.resolve(okHebergement);
    })
    .catch((err) => {
      console.error(
        'Data.create data failed when save ' + packet + ' ==> ',
        err,
      );
      return Promise.reject(err);
    });
};

var Hebergement;
function make(connection) {
  if (Hebergement !== undefined) return Hebergement;
  Hebergement = connection.model('Hebergement', hebergementschema);
  return Hebergement;
}
module.exports = make;
