const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  subject: { type: String },
  massage: { type: String },
});
module.exports = mongoose.model("Contact", contactSchema);
