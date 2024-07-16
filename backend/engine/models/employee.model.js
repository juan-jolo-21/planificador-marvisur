const mongoose = require ('mongoose');
const personSchema = require('./person.model');

const {Schema} = mongoose;

const employeeSchema = new Schema({

    person: {
        type: personSchema,
        required: true
    },
    name_branch: {
        type: String,
        required: true,
        trim : true
    },
    position: {
        type: String,
        required: true,
        trim : true
    }
},{
    _id: false
});

module.exports = employeeSchema;