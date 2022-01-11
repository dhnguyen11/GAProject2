const Member = require("../models/member");

module.exports = {
    new: newMember
}

function newMember(req, res) {
    console.log(req.body)
    console.log(req.params)
    res.send("hitting route")
}