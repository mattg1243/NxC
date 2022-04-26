// Node module imports
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');
const session = require('express-session');
// custom imports
const router = require('./routes/registerRouter');  // this needs to split up into seperate routes
// import env variables
require('dotenv').config();
// instantiate the express application
const app = express();
// connect to the database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, tls: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
// middleware
app.use(cors());
app.use(session({
  secret: 'jh36dkf9a0fkjvnxzxvcjhd098376',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 60 * 1000}, // 1 hour
  store: connectMongo.create({ mongoUrl: process.env.DB_URL }),
  secure: true
}))
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// routes
app.use('/register', router);

app.listen("3001", ()=>{
  console.log("listening on port 3001...")
});
