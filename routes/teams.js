const router = require('express').Router();
const passport = require('passport');
const teamsCtrl = require('../controllers/teams');

// Routes
router.get('/users/:userId/teams/new', teamsCtrl.new);
router.get('/users/:userId/teams', teamsCtrl.index);
router.post('/users/:userId/teams/new', teamsCtrl.create);

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;