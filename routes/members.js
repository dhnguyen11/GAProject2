const router = require('express').Router();
const passport = require('passport');
const membersCtrl = require('../controllers/members');

// Routes
router.get('/teams/:teamId/members', membersCtrl.new);
router.post('/teams/:teamId/members/:name', membersCtrl.create);
router.get('/teams/members/:id', membersCtrl.edit);
router.put('/teams/members/:id', membersCtrl.update);
router.delete('/teams/members/:id', membersCtrl.delete);

module.exports = router;