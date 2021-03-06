const Team = require("../models/team");
const User = require("../models/user");
const Member = require("../models/member");

const request = require("request");

module.exports = {
  new: newTeam,
  create,
  index,
  show,
  delete: deleteTeam,
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
        res.redirect(`/${req.params.userId}/teams`);
      });
    });
  } else {
    res.redirect("/");
  }
}

function index(req, res) {
  if (req.user) {
    Team.find({ creator: req.user._id })
      .populate("members")
      .exec(function (err, teams) {
        res.render("teams/index", {
          title: "My Teams",
          user: req.user,
          teams: teams,
        });
      });
  } else {
    res.redirect("/");
  }
}

function show(req, res) {
  if (req.user) {
    Team.findById(req.params.id)
      .populate("members")
      .exec(function (err, team) {
        request(
          `${process.env.BASE_URL}${process.env.GENERATION_URL}`,
          function (err, response, body) {
            const resData = JSON.parse(body);
            resData.pokemon_species.forEach((p) => {
              const str = p.name.charAt(0).toUpperCase() + p.name.slice(1);
              p.capName = str;
            });
            team.members.forEach((t) => {
              const capName = t.name.charAt(0).toUpperCase() + t.name.slice(1);
              t.capName = capName;
              t.capMoves = [];
              t.moves.forEach((m) => {
                const words = m.split("-");
                for (let i = 0; i < words.length; i++) {
                  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                }
                moveName = words.join(" ");
                t.capMoves.push(moveName);
              });
            });
            res.render("teams/show", {
              title: team.name,
              team,
              pokemon: resData.pokemon_species,
              user: req.user,
            });
          }
        );
      });
  } else {
    res.redirect("/");
  }
}

function deleteTeam(req, res) {
  if (req.user) {
    Team.deleteOne({ _id: req.params.id }, function (err) {
      res.redirect(`/${req.params.userId}/teams`);
    });
  } else {
    res.redirect("/");
  }
}
