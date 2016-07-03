var mongoose = require('mongoose');

var planDb = new mongoose.Schema({
  planID: String,
  userID: String
})