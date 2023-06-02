const MyModel = require('../models/ModelSumaryReactions');

exports.getDocument = async (req, res) => {
  const { objectid, reactionid } = req.params;

  try {
    const doc = await MyModel.findOne({
      '_id.objectid': objectid,
      '_id.reactionid': reactionid,
    });

    if (doc) {
      console.log('json encontrado:', doc);
      res.json(doc);
    } else {
      console.log('json no encontrado');
      res.status(404).send('json no encontrado');
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
};
