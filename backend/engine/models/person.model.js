const mongoose = require ('mongoose');

const {Schema} = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim : true
    },
    last_name_1: {
        type: String,
        required: true,
        trim : true
    },
    last_name_2: {
        type: String,
        required: true,
        trim : true
    },
    dni: {
        type: Number,
        required: true,
        min: 40000000, // Valor mínimo de 8 cifras
        max: 99999999 // Valor máximo de 8 cifras
    },
},{
    _id: false
});

module.exports = personSchema;