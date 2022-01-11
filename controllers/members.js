const Member = require("../models/member");
const Team = require("../models/team");

const request = require('request');

module.exports = {
    new: newMember,
    index
}

function newMember(req, res) {
    console.log(req.body)
    console.log(req.params)
    res.send("hitting route")
}

function index (req, res) {
    
}