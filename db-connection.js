const mongoose = require('mongoose');
const config = require('./config/config.json')
require('dotenv').config();

// const mongoURL = `mongodb://usetrdev:PTdFT2078xcasxcfrgm2t@localhost:27017/transconlive`;

if (process.env.NODE_ENV == 'production') {
    mongoose.connect(config[process.env.NODE_ENV].database_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Error while connecting to the database:", error);
    });
} else {
    mongoose.connect(config[process.env.NODE_ENV].database_url, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
        console.log("database connected")
    }).catch((error) => {
        console.log("Error while connect to database",error)
    });
}
module.exports={
    dbConnection:mongoose.connection
} 