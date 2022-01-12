const router = require('express').Router();
const passport = require('passport');
const teamsCtrl = require('../controllers/teams');

// Routes
router.get('/:userId/teams/new', teamsCtrl.new);
router.get('/:userId/teams', teamsCtrl.index);
router.post('/:userId/teams/new', teamsCtrl.create);
router.get('/teams/:id', teamsCtrl.show);
router.delete('/teams/:id', teamsCtrl.delete);

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;