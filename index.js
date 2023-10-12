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
const Brands = require('./models/brands.model');
const Category = require('./models/category.model');
const Product = require('./models/product.model');
const Image = require('./models/images.model');
const BrandCategory = require('./models/brands_category.model');
const Pages = require('./models/pages.model');
const content = require('./models/content.model'); 
const Menu = require('./models/menu.model'); 
const Job = require('./models/jobs.model'); 
const Blog = require('./models/blog.model'); 

const path = require('path');
var CronJob = require('cron').CronJob;
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// const multipartMiddleware = multiparty({ uploadDir: 'uploads' });

// app.use(multipartyMiddleware);

//routes

const adminRoutes = require('./routes/admin.routes');
app.use('/api/admin/', adminRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/api/user/', userRoutes);

const brandRoutes = require('./routes/brands.routes');
app.use('/api/brand/', brandRoutes);

const categoryRoutes = require('./routes/category.routes');
app.use('/api/category/', categoryRoutes);

const productRoutes = require('./routes/product.routes');
app.use('/api/product/', productRoutes);

const imagesRoutes = require('./routes/image.routes');
app.use('/api/images/', imagesRoutes);

const brandsCategoryRoutes = require('./routes/brands.category.routes');
app.use('/api/brand-category/', brandsCategoryRoutes);

const enquireRoutes = require('./routes/enquire.routes');
app.use('/api/enquire/', enquireRoutes);

const pageRoutes = require('./routes/page.routes');
app.use('/api/pages/', pageRoutes);

const cmsRoutes = require('./routes/cms.routes');
app.use('/api/cms/', cmsRoutes);

const MenuRoutes = require('./routes/menu.routes');
app.use('/api/menu/', MenuRoutes);

const JobRoutes = require('./routes/job.routes');
app.use('/api/job/', JobRoutes);

const BlogRoutes = require('./routes/blog.routes');
app.use('/api/blog/', BlogRoutes);



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
