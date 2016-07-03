const Plan = require('../models/plan.js');
const User = require('../models/User.js');
const Itinerary = require('../models/itinerary');
const Item = require('../models/item');

exports.searchTitle = (req,res) => {
  var keyword = req.params.keyword;
  Plan.find({'location': keyword}, function(err, cursor){
    res.send(cursor);
  });
}