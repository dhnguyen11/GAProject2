const User = require("../models/user");

module.exports = {
  landing
};

function landing(req, res) {
  if (req.user) {
    res.redirect(`/${req.user._id}/teams`);
  } else {
    res.redirect("/");
  }
}
