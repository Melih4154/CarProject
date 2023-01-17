const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
  {
    city: String,
    phone: String,
    login_type: String,
    mail: String,
    password: String,
    user_name: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("user", UserSchema);
