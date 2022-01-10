const Team = require("../models/team");

module.exports = {
  new: newTeam,
  create
};

function newTeam(req, res) {
  if (req.user) {
    res.render("teams/new", { title: "New Team", user: req.user });
  }
  else {
    res.redirect("/");
  }
}

function create(req, res) {
    if(req.user) {

    }
    else {
        res.redirect("/")
    }
}