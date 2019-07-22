const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.Promise = global.Promise;


const conn = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?replicaSet=Cluster0-shard-0`;
mongoose.connect(conn, { 
  useNewUrlParser: true,
  keepAlive: 1,
  reconnectTries: Number.MAX_VALUE,
  w: "majority", 
  wtimeout: 10000,
  ssl: true,
  "auth": {"authSource": "admin"},
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
  // server: { poolSize: 5 },
  //  replset: {rs_name: 'Cluster0-shard-0'},
})
  .then(() => {
  })
  .catch(err => {
     console.log(err);
  });

const app = express();
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));

module.exports = app;
