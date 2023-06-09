const mongoose = require('mongoose');
const config = require('./config/config.json')
require('dotenv').config();
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'production') {
    mongoose.connect(config[process.env.NODE_ENV].database_url).then((result) => {
        console.log("database connected")
    }).catch((error) => {
        console.log("Error while connect to database")
    });
} else {
    mongoose.connect(config[process.env.NODE_ENV].database_url).then((result) => {
        console.log("database connected")
    }).catch((error) => {
        console.log("Error while connect to database",error)
    });
}
module.exports={
    dbConnection:mongoose.connection
} 