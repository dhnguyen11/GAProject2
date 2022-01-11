const Member = require("../models/member");
const Team = require("../models/team");

const request = require('request');

module.exports = {
    new: newMember
}

function newMember(req, res) {
    Team.findById(req.params.teamId, function(err, team) {
        request(`${process.env.BASE_URL}pokemon/${req.query.name}`, function(err, request, body) {
            const pkmnData = JSON.parse(body);
            const moveList = pkmnData.moves;
            const baseMoves = [];
            const capName = req.query.name[0].toUpperCase() + req.query.name.substr(1);
            moveList.forEach( (m) => {
                for (let v of m.version_group_details) {
                    if (v.version_group.name === 'red-blue') {
                        baseMoves.push({name: m.move.name});
                        break;
                    }
                }
            })
            baseMoves.forEach( (m) => {
                const words = m.name.split("-");
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                }
                moveName = words.join(" ");
                m.capName = moveName;
            })
            res.render("members/new", {
                pkmnName: req.query.name,
                capName,
                moves: baseMoves,
                team,
                title: `Add Member`
            })
        })
    })
}