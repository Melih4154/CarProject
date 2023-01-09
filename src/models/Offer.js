const Mongoose = require("mongoose");

const OfferSchema = new Mongoose.Schema(
  {
    demand_id: {
      type: Mongoose.Types.ObjectId,
      ref: "demand",
    },
    price: Number,
    user_id: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
    },
    created_at: Date,
    offerDetail: String,
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

module.exports = Mongoose.model("offer", OfferSchema);
