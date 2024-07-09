const mongoose = require('mongoose');
const dbURL = require ('./properties').DB;


module.exports = async () => {
    /*
    mongoose.connect(dbURL)
    .then(()=>console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection has error: ${err} `));
    */
    try {
        await mongoose.connect(dbURL);
        console.log(`Engine service: Mongo connected on ${dbURL}`);
    } catch (err) {
        console.log(`Connection has error: ${err} `)
    }


    process.on (
        'SIGINT', 
        () => {
            mongoose.connection.close(
                () => {
                    console.log(`Mongo is disconnected`);
                    process.exit(0);
                }
            )
        }
    )
}