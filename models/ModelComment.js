const mongoose = require('mongoose');

// Definir el esquema y modelo del documento
const mySchema = new mongoose.Schema({
    _id: {
      $ObjectId: String,
    },
    userid: String,
    objectid: String,
    message: String,
  });

const ModeloComment = mongoose.model('ModeloComment', mySchema, 'tkdapp_comments'); //cambiar el nombre de la bd

module.exports = ModeloComment