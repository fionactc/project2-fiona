var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  location: String,
  startDate: Date,
  endDate: Date
})

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;