const Member = require("../models/member");
const Team = require("../models/team");

const request = require("request");

module.exports = {
  new: newMember,
  create,
};

function newMember(req, res) {
  if (req.user) {
    Team.findById(req.params.teamId, function (err, team) {
      request(
        `${process.env.BASE_URL}pokemon/${req.query.name}`,
        function (err, request, body) {
          const pkmnData = JSON.parse(body);
          const moveList = pkmnData.moves;
          const baseMoves = [];
          const capName =
            req.query.name[0].toUpperCase() + req.query.name.substr(1);
          moveList.forEach((m) => {
            for (let v of m.version_group_details) {
              if (v.version_group.name === "red-blue") {
                baseMoves.push({ name: m.move.name });
                break;
              }
            }
          });
          baseMoves.forEach((m) => {
            const words = m.name.split("-");
            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            moveName = words.join(" ");
            m.capName = moveName;
          });
          res.render("members/new", {
            pkmnName: req.query.name,
            capName,
            moves: baseMoves,
            team,
            title: `Add Member`,
            user: req.user
          });
        }
      );
    });
  }
  else {
      res.redirect("/");
  }
}

function create(req, res) {
  if (req.user) {
    Team.findById(req.params.teamId, function(err, team) {
        req.body.moves = [];
        req.body.moves.push(req.body.move1);
        req.body.moves.push(req.body.move2);
        req.body.moves.push(req.body.move3);
        req.body.moves.push(req.body.move4);
        delete req.body.move1;
        delete req.body.move2;
        delete req.body.move3;
        delete req.body.move4;
        req.body.name = req.params.name;
        Member.create(req.body, function (err, member) {
            team.members.push(member._id);
            team.save(function(err) {
              res.redirect(`/${req.user._id}/teams`)
            })
        })
    })
  } 
  else {
    res.redirect("/");
  }
}
