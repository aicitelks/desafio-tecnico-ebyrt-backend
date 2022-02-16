const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_URL = process.env.HOST || 'mongodb://localhost:27017/';
const DB_NAME = 'Ebyrt';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = () => MongoClient.connect(DB_URL, OPTIONS)
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
