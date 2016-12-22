var express = require('express');
var router = express.Router();
var User = require('../models/models.js').User;

/* GET users listing. */
router.post('/login', function(req, res, next) {
  User.findOne({username: req.body.username}, function (err, user) {
    if(err) {
      res.status(400).send(err);
    }
    else if(user === null) {
      res.status(401).send('This Username does not exist');
    }
    else if (user && user.password !== req.body.password) {
      res.status(401).send('Either the Username or password is incorrect');
    }
    else if (user && user.password === req.body.password) {
      res.json(user);
    }
  });
});

router.post('/create', function (req, res)  {
  if((req.body.username && req.body.password)) {
    User.findOne({username: req.body.username}, function (err, user) {
      if (err) {
        res.status(400).send(err);
      }
      else if (user) {
        res.send('User already exists. Login with existing User or change username');
      }

      else {
        User.create(req.body, function(theErr, theUser){
          if(theErr){
            res.status(400).send(theErr);
          }
          else{
            res.send(theUser);
          }
        })
      }
    });
  }
  else {
    res.send('Account not created. Please enter a username and password.');
  }
});

module.exports = router;
