const mongoose = require("mongoose");
const Category = require("../moduls/category");

const productSchema = mongoose.Schema(
  {
    name: {type: String,},
    amount: {type: Number,},
    price: {type: Number,},
    details: {type: String,},
    title: {type: String,},
    image: {type: String,},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category",},
    createdAt: {type: String, default: new Date(),},
    updatedAt: {type: String, default: null,},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
