const Mongoose = require("mongoose");

const TeamSchema = new Mongoose.Schema(
  {
    team_name: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("team", TeamSchema);
