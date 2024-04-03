const mongoose = require ('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;
//mongoose.set('useCreateIndex',true);
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
    }
});

const employeeSchema = new Schema({
    dni: {
        type: Number,
        required: true,
        min: 40000000, // Valor mínimo de 8 cifras
        max: 80000000 // Valor máximo de 8 cifras
    },
    person: {
        type: personSchema,
        required: true
    },
    name_branch: {
        type: String,
        required: true,
        trim : true
    }
});

const userSchema = new Schema({
    user_type: {
        type: String,
        required: true,
        enum: ['admin', 'manloader', 'register'] // Solo permite estos valores
    },
    email: {
        type: String,
        required: true,
        trim : true
    },
    password: {
        type: String,
        required: true,
        trim : true
    },
    date_register: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                // Validar el formato de fecha (d-MM-YYYY)
                const pattern = /^\d{1,2}-\d{1,2}-\d{4}$/;
                return pattern.test(value);
            },
            message: props => `${props.value} no es un formato de fecha válido (d-MM-YYYY)`
        }
    },
    employee: {
        type: employeeSchema,
        required: true
    }
},{
    versionKey: false, timestamp: false
});



module.exports = mongoose.model('Users', userSchema, 'Users');

