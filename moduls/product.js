const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  amount:{
      type:Number
  },
  category: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

});
module.exports = mongoose.model("Product", productSchema);
