const mongoose = require ('mongoose');
const employeeSchema = require ('./employee.model');

const {Schema} = mongoose;

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