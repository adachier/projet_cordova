const collections = require('../collections');
console.log(collections)

module.exports = async function(req, res, next) {
  var name = (req.body.name || '');
  var lattitude = (req.body.lattitude || '');
  var longitude = (req.body.longitude || '');
  var description = (req.body.description || '');

  console.log(req.body);
  collections.Hebergement.create({
    name:name,
    lattitude:lattitude,
    longitude:longitude,
    description:description,
  }).then(okHebergement => {
    console.log(okHebergement);
    res.status(200).send({ ok:true });
  }).catch(err => {
    res.status(500).send(err);
  });
};
