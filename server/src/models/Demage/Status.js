const Mongoose = require("mongoose");

const StatusSchema = new Mongoose.Schema(
  {
    status: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("status", StatusSchema);