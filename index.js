const express = require('express');
const cors = require('cors');
const app = express();
const multer = require("multer");
const multiparty = require('connect-multiparty');
const cookieParser = require('cookie-parser');
const multipartyMiddleware = multiparty({ uploadDir: 'uploads' });
const dbConn = require("./db-connection");
const bodyParser = require('body-parser');
const User = require('./models/user.model');
const Image = require('./models/images.model');
const Menu = require('./models/menu.model'); 

const path = require('path');
var CronJob = require('cron').CronJob;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// const multipartMiddleware = multiparty({ uploadDir: 'uploads' });

// app.use(multipartyMiddleware);

//routes

const userRoutes = require('./routes/user.routes');
app.use('/api/user/', userRoutes);




// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static('uploads')); 


// Catch-all route: send all requests to the root route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log("Server listening at 5000");
});
