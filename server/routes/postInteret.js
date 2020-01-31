const collections = require('../collections');
console.log(collections)

module.exports = async function(req, res, next) {
  var name = (req.body.name || '');
  var lattitude = (req.body.lattitude || '');
  var longitude = (req.body.longitude || '');
  var description = (req.body.description || '');
  console.log(req.body)
  collections.Interet.create({
    name:name,
    lattitude:lattitude,
    longitude:longitude,
    description:description,
  }).then(okInteret => {
    console.log(okInteret);
    res.status(200).send({ ok:true });
  }).catch(err => {
    res.status(500).send(err);
  });
};