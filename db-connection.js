// getting-started.js
const mongoose = require('mongoose');
const config = require('./config/config.json');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.development.database_url);
  console.log('mongodb connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}