const Member = require("../models/member");
const Team = require("../models/team");

const request = require('request');

module.exports = {
    new: newMember
}

function newMember(req, res) {
    console.log(req.query)
    console.log(req.params)
    res.send("hitting route")
}