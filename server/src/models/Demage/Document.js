const Mongoose = require("mongoose");

const StatusSchema = new Mongoose.Schema(
  {
    demage_id: {
      type: Mongoose.Types.ObjectId,
      ref: "demage",
    },
    status: String,
    title: String,
    file_name:String,
    type: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("document", StatusSchema);
