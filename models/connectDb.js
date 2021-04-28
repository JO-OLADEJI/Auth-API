const mongoose = require('mongoose');
require('dotenv/config.js');


const connectDB = () => {
  mongoose.connect(
    process.env.DB_CONNECTION_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to DB...')
  );
}


module.exports = connectDB;