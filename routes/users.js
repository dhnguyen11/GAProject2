var router = require('express').Router();
const passport = require('passport');

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  module.exports = router;