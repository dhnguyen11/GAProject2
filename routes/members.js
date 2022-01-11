const router = require('express').Router();
const passport = require('passport');
const membersCtrl = require('../controllers/members');

// Routes
router.get('users/teams/:teamId/members', membersCtrl.new);

module.exports = router;