const Plan = require('../models/plan.js');
const User = require('../models/User.js');
const Itinerary = require('../models/itinerary');
const Item = require('../models/item');

exports.index = (req, res) => {
  Plan.findById(req.params.id, function(err, plan){
    var html = 'li hihi'
        res.render('view-plan', {plan: plan, hihi: html});
  })
}

exports.getData = (req, res) => {
  Plan.findById(req.params.id, function(err, plan){
    res.json({plan});
  })
}

exports.editPlan = (req, res) =>{
  Plan.findById(req.params.id, function(err, plan){
    if(req.user._id==plan.userId){
      console.log('same user');
      res.send(plan._id);
    } else {
      var newPlan = new Plan({
        title: plan.title,
        location: plan.location,
        days: plan.days,
        userId: req.user._id,
        public: plan.public,
        itinerary: plan.itinerary,
        hashTag: plan.hashTag,
        count: plan.count,
        comment: plan.comment
      });
      newPlan.save();
      res.send(newPlan._id);
    }
  })
}

