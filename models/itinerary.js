var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Item = require('../models/item');
var Plan = require('../models/plan');

var itineraryScehma = new mongoose.Schema({
  plan: [{type: Schema.ObjectId, ref:'Plan'}],
  dayNumber: Number,
  item: Array
  // item: [{type: Schema.ObjectId, ref:'Item'}]
})

var Itinerary = mongoose.model('Itinerary', itineraryScehma);
module.exports = Itinerary;