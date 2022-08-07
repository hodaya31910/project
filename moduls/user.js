const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { type: String, require },
  lastName: { type: String },
  email: { type: String, match: /(.+)@(.+){2,}\.(.+){2,}/i, require },
  phone: { type: String },
  password: { type: String, require },
  token: { type: String },
  createdAt: { type: String, default: formattedDate(new Date()) },
  updatedAt: { type: String, default: null },
  deletedAt: { type: String, default: null },
});
module.exports = mongoose.model("User", userSchema);

function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return `${month}/${day}/${year}`;
}
