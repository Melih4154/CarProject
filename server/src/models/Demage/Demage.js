const Mongoose = require("mongoose");

const DemageSchema = new Mongoose.Schema(
  {
    file_number: Number,
    crash_date: Date,

    user_id: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },

    // vehicle_id: {
    //   type: Mongoose.Types.ObjectId,
    //   ref: "vehicle",
    // },
    explanation: String,

    status: String,
    // {
    //   type: Mongoose.Types.ObjectId,
    //   ref: "status",
    // },

    subject: String,
    // {
    //   type: Mongoose.Types.ObjectId,
    //   ref: "subject",
    // },

    personel: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    arbitration_number: String,

    //demage_team:
    expert: String,

    // sender: {
    //   type: Mongoose.Types.ObjectId,
    //   ref: "user",
    // },
    // sender_note: String,

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

module.exports = Mongoose.model("demage", DemageSchema);
