const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "user",
  },
  email: {
    type: String,
    match: /(.+)@(.+){2,}\.(.+){2,}/i,
  },
 
  password: {
    type: String,
    require,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ]
  
});
module.exports = mongoose.model("User", userSchema);
