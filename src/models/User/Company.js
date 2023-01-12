const Mongoose = require("mongoose");
const UserSchema = require("./User");

const CompanySchema = new Mongoose.Schema(
  {
    company_name: String,
    products: [
      {
        type: Mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
    tax_number: String,
    address: String,
    comments: [
      {
        value: String,
        star: Number,
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

module.exports = UserSchema.discriminator("company", CompanySchema);
