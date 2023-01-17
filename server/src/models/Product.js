const Mongoose = require("mongoose");

const ProductSchema = new Mongoose.Schema(
  {
    product_name: String,
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("product", ProductSchema);
