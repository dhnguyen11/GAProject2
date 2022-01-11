const router = require('express').Router();
const passport = require('passport');
const membersCtrl = require('../controllers/members');

// Routes
router.get('/teams/:teamId/members', membersCtrl.new);
router.post('/teams/:teamId/members/:name', membersCtrl.create);

module.exports = router;