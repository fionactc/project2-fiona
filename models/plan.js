var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var Location = mongoose.model('Location');
// var Itinerary = require('../models/itinerary');

var planSchema = new mongoose.Schema({
  title: String,
  location: String,
  locationID: String, // for Google Map API
  days: Number,
  pictureUrl: String,
  userId: String, // author user id
  public: Boolean, // whether it is public
  itinerary: Array,
  // itinerary: [{type: Schema.ObjectId, ref:'Itinerary'}],
  // hashTag: [{name: String}],
  count: [{favorite: Number, bookmark: Number}],
  comment: [{author: String, timestamp: Date, text: String}]
});

var Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;