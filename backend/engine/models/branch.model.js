
const mongoose = require ('mongoose');


const {Schema} = mongoose;

const branchSchema = new Schema({
    name_branch: {
        type: String,
        required: true,
        trim : true
    },
    place: {
        type: String,
        required: true,
        trim : true
    },
    aboutplace: {
        type: String,
        required: true,
        trim : true
    },
    address: {
        type: String,
        required: true,
        trim : true
    },
    housed_packages_id : [{
        type: String,
        required: true,
        trim : true
    }]
},{
    _id:false, versionKey: false, timestamp: false,
});

module.exports = mongoose.model('Branches',branchSchema,'Branches');