const Mongoose = require("mongoose");
const UserSchema = require("./User");

const IndividualUserSchema = new Mongoose.Schema(
  {
    full_name: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = UserSchema.discriminator("individual", IndividualUserSchema);
