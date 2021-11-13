const mongoose = require("mongoose");
const Product = require("../moduls/product");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
  },
 
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
]
});

module.exports = mongoose.model("Category", categorySchema);
