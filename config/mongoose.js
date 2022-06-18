const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rroshnimitra:_xZmY3b_qN9jsvV@cluster0.xs3po5l.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connectiing to DB'));


db.once('open', function () {
  console.log('Successfully connected to database :: MongoDB');
});

module.exports = db;