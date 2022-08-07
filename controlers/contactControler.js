const Contact = require("../moduls/contact.js");

const contact = async (req, res) => {
  console.log("new contact request");
  try {
    const contact = await new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
module.exports = { contact };
