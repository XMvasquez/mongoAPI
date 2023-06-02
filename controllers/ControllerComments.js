const MyModel = require('../models/ModelComment');

exports.getDocumentsByObjectId = async (req, res) => {
  const { objectid } = req.params;

  try {
    const doc = await MyModel.find({ 'objectid': objectid });

    if (doc.length > 0) {
      console.log('json encontrados:', doc);
      res.json(doc);
    } else {
      console.log('json no encontrado');
      res.status(404).send('json no encontraron');
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
};
