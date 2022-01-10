const Team = require("../models/team");
const User = require("../models/user");

module.exports = {
  new: newTeam,
  create,
  index,
};

function newTeam(req, res) {
  if (req.user) {
    res.render("teams/new", { title: "New Team", user: req.user });
  } else {
    res.redirect("/");
  }
}

function create(req, res) {
  if (req.user) {
    User.findById(req.params.userId, function (err, user) {
      req.body.creator = req.params.userId;
      req.body.members = [];
      if (!req.body.name) {
        req.body.name = "Team";
      }
      Team.create(req.body, function (err, teamDocument) {
        res.redirect(`/users/${req.params.userId}/teams`);
      });
    });
  } else {
    res.redirect("/");
  }
}

function index(req, res) {
  if (req.user) {
    Team.find({ creator: req.user._id }, function (err, teams) {
      res.render("teams/index", {
        title: "My Teams",
        user: req.user,
        teams: teams
      });
    });
  } else {
    res.redirect("/");
  }
}
