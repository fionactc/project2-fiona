const Plan = require('../models/plan.js');
const User = require('../models/User.js');
const Itinerary = require('../models/itinerary');
const Item = require('../models/item');

exports.index = (req, res) => {
  Plan.findById(req.params.id, function(err, plan){
    res.render('edit-plan', {plan: plan});
  })
}

exports.getData = (req, res) => {
  Plan.findById(req.params.id, function(err, plan){
    res.json({plan});
  })
}
