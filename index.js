const express = require('express');
const cors = require('cors')
const app = express();
const multer = require("multer");
const multiparty = require('connect-multiparty');
const cookieParser = require('cookie-parser');
const multipartyMiddleWare = multiparty();
const upload = multer({});
const dbConn = require("./db-connection")
const bodyParser = require('body-parser');
const User = require('./models/user.model');
const Brands  = require('./models/brands.model');
const Category = require('./models/category.model');

// const report_category = require('./models/report_category.model');

 
const path = require('path');


var CronJob = require('cron').CronJob;
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(multipartyMiddleWare);



//routes

const adminRoutes = require('./routes/admin.routes');
app.use('/api/admin/', adminRoutes);

const brandRoutes = require('./routes/brands.routes');
app.use('/api/brand/', brandRoutes);

const categoryRoutes = require('./routes/category.routes');
app.use('/api/category/', categoryRoutes);



// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route: send all requests to the root route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(5000, () => {
    console.log("Server listning at 5000")
});