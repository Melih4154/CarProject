const Mongoose = require("mongoose");

const CarSchema = new Mongoose.Schema(
  {
    demage_id: {
      type: Mongoose.Types.ObjectId,
      ref: "demage",
    },
    brand: String,
    usage: String,
    engine_number: String,
    model: String,
    type: String,
    chassis_number: String,
    number_plate: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("car", CarSchema);
