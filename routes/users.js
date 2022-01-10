const router = require('express').Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');

// Route to create a new Team
router.get('/:id/tickets/new', usersCtrl.newTeam);

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;