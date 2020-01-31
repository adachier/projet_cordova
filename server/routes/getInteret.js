const collections = require('../collections');

module.exports = async function(req, res, next) {
  try {
    const dataI = await collections.Interet.find();
    res.status(200).send({ dataI });
  } catch (e) {
    res.status(500).send('ERROR WHEN FETCHING DATA', e);
  }
};
