const Mongoose = require("mongoose");

const SubjectSchema = new Mongoose.Schema(
  {
    subject: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("subject", SubjectSchema);