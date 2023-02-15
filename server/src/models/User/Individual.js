const Mongoose = require("mongoose");
const UserSchema = require("./User");

const IndividualUserSchema = new Mongoose.Schema(
  {
    full_name: String,
    id_number: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = UserSchema.discriminator("individual", IndividualUserSchema);
