const router = require('express').Router();
const passport = require('passport');
const teamsCtrl = require('../controllers/teams');

// Routes
router.get('/users/:id/teams/new', teamsCtrl.new);
router.post('/users/:id/teams', teamsCtrl.create);

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;