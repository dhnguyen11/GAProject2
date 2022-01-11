const router = require('express').Router();
const passport = require('passport');
const membersCtrl = require('../controllers/members');

// Routes
router.post('users/teams/:teamId/members', membersCtrl.new);

module.exports = router;