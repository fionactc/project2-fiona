const Plan = require('../models/plan.js');
const User = require('../models/User.js');
const Itinerary = require('../models/itinerary');
const Item = require('../models/item');

exports.index = (req, res) => {
  res.render('create-plan', {
    title: 'Create plan'
  });
}

exports.withID = (req, res) => {
  var id = req.params.id;
  var title = '';
  var author = '';
  var location = '';
  Plan.findById(id, function(err, plan){
    // create title
    location = plan.location;
    // location = plan.location[0];
    title = plan.location;
    // for(var i = 1; i<plan.location.length; i++){
    //   title += ', ' + plan.location[i];
    // }
    if (plan.days == 1){
      title += ' ' + plan.days + ' Day Trip';
    } else {
      title += ' ' + plan.days + ' Days Trip';
    }

    // retrieve author
    User.findById(plan.userId, function(err, user){
      author = user.profile.name;
      res.render('create-plan', {
        'title': title,
        'location': location,
        'days': plan.days,
        'author': author,
        'planId': req.params.id
      })
    })
  })
}

exports.savePost = (req, res) => {

  Plan.findById(req.params.id, function(err, plan){
    // reset plan.itinerary
    plan.itinerary.splice(0, plan.itinerary.length);
    plan.title = req.body.title;
    plan.public = req.body.public;
    console.log(plan.public);
    // var dummyArr = req.body.itinerary;
    plan.itinerary = req.body.itinerary;
    plan.save();
    req.flash('success', { msg: 'Plan saved.' });
    res.send(plan._id);
    // }
  })
}