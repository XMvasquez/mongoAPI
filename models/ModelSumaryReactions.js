const mongoose = require('mongoose');

// Definir el esquema y modelo del documento
const mySchema = new mongoose.Schema({
    _id: {
        objectid: String,
        reactionid: String,
    },
    n: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: 'número',
    },
});

const ModeloReaction = mongoose.model('ModeloReaction', mySchema, 'tkdapp_reactions_sumary');

module.exports = ModeloReaction