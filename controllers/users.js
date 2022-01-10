const Team = require('../models/team');
const User = require('../models/user');

module.exports = {
    landing,
    newTeam
}

function landing(req, res) {
    console.log(req.params.id);
    res.render("users/index", { title:"Test" });
}

function newTeam(req, res) {
    res.render("teams/new", { title:"New Team" })
}