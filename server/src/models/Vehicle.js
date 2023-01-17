const Mongoose = require("mongoose");

const VehicleSchema = new Mongoose.Schema(
  {
    user_id: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    brand: String,
    model: String,
    year: Number,
    vehicle_inspection_date: Date,
    oil: String,
    gear: String,
    km: String,
    vehicle_chassis_no: String,
    licence_photo: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("vehicle", VehicleSchema);
