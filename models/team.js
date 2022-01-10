const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Team model
const teamSchema = new Schema(
  {
    name: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
