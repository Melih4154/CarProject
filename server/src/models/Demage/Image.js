const Mongoose = require("mongoose");

const ImageSchema = new Mongoose.Schema(
  {
    demage_id: {
      type: Mongoose.Types.ObjectId,
      ref: "demage",
    },
    team_id: {
      type: Mongoose.Types.ObjectId,
      ref: "team",
    },
    url: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("image", ImageSchema);
