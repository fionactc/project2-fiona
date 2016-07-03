const Plan = require('../models/plan.js');
const User = require('../models/User.js');
const Itinerary = require('../models/itinerary');
const Item = require('../models/item');
var mongoose = require('mongoose');

exports.getUserPlan = (req, res) =>{
  // var id = '5778b734f87c2de3995fe818';
  //  Plan.findById('5778b888ad81953c9b0e75cf', function(err, plan){
  //   console.log(plan.title);
  // })

  Plan.find({'userId': req.user._id}, function(err, cursor){
    res.send(cursor);
  });
}

exports.deletePlan = (req, res) =>{
  // console.log(req.params.id);
  // var id = req.params.id;
  // var fileId = mongoose.Types.ObjectId(req.params.id);
  // var id = ObjectId(req.params.id);

  Plan.findById(req.params.id, function(err, plan){
    plan.title = '';
    plan.location = '';
    plan.days = '';
    plan.pictureUrl = '';
    plan.userId = '';
    plan.public = 0;
    plan.itinerary = [];
    plan.save(function(err){
      res.send('deleted '+req.params.id);
    });
  })


  // Plan.remove( {"_id": ObjectId(req.params.id)});
  // Plan.remove({'_id': req.params.id});
  // Plan.deleteOne({'_id': req.params.id}, function(err, results){
  //   console.log(results);

  // })
}