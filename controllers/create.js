const Plan = require('../models/plan');
const passport = require('passport');
const User = require('../models/User');



exports.index = (req, res) => {
  res.render('create', {
    title: 'Create plan'
  });
};

exports.postPlan = (req, res) => {

  var plan = new Plan({
    location: req.body.name,
    days: req.body.days,
    pictureUrl: req.body.pictureUrl,
    public: 0,
    userId: req.user._id
  });

  plan.save(function(err, newPlan){
    res.send(newPlan._id);
    // res.send({redirect:'/create-plan'});
      // res.json(newPlan._id);
      // return res.render('/create-plan', {id: newPlan._id});
      // return res.redirect('/create-plan')

    // res.json( newPlan._id );

    // newPlan._id

  });

}
