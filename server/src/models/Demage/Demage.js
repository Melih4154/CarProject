const Mongoose = require("mongoose");

const DemageSchema = new Mongoose.Schema(
  {
    file_number: Number,
    crash_date: Date,

    name: String,
    number_plate: String,

    id_number: String,
    explanation: String,

    status: {
      type: Mongoose.Types.ObjectId,
      ref: "status",
    },

    subject: {
      type: Mongoose.Types.ObjectId,
      ref: "subject",
    },
    registrant: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },

    personel: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    arbitration_number: String,

    //demage_team: 
    expert: String,
    
    sender:  {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    sender_note: String,    
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("demage", DemageSchema);