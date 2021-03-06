const router = require('express').Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');

// Routes
router.get('/', usersCtrl.landing);

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;