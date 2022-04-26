const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;
require('dotenv').config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error"));

const UserSchema = new Schema({

  username: { type: String, required: true, maxLength: 100},
  notionToken: { type: String, required: false},
  canvasToken: { type: String, required: false}

})

UserSchema.plugin(passportLocalMongoose);

module.exports =  mongoose.model('User', UserSchema, 'users');