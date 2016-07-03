var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Itinerary = require('../models/itinerary');


var itemSchema = new mongoose.Schema({
  itinerary: [{type: Schema.ObjectId, ref:'Itinerary'}],
  location: String,
  time: String,
})

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;