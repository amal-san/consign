const mongoose = require('mongoose');
const config = require('.');

const uri = config.MONGO_DB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConn = mongoose.connection;

module.exports = dbConn