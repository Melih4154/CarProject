const Mongoose = require("mongoose");

const DemandSchema = new Mongoose.Schema(
  {
    user_id: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    vehicle_id: {
      type: Mongoose.Types.ObjectId,
      ref: "vehicle",
    },
    product_id: {
      type: Mongoose.Types.ObjectId,
      ref: "product",
    },
    demandDetail: String,
    comments: [
      {
        value: String,
        created_at: Date,
        user_id: {
          type: Mongoose.Types.ObjectId,
          ref: "user",
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("demand", DemandSchema);
