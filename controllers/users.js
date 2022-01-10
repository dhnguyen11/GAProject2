const User = require("../models/user");

module.exports = {
  landing
};

function landing(req, res) {
  if (req.user) {
    res.render("users/index", { title: "Welcome to Teambuilder!", user: req.user });
  } else {
    res.redirect("/");
  }
}
