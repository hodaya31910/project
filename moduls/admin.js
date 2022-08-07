const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      match: /(.+)@(.+){2,}\.(.+){2,}/i,
    },

    password: {
      type: String,
      require,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Admin", adminSchema);
