const collections = require('../collections');

module.exports = async function(req, res, next) {
  try {
    const dataH = await collections.Hebergement.find();
    res.status(200).send({ dataH });
  } catch (e) {
    res.status(500).send('ERROR WHEN FETCHING DATA', e);
  }
};
