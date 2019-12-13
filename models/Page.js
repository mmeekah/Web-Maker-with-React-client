const mongoose = require("mongoose");
const PageSchema = mongoose.Schema({
  websiteId: { type: mongoose.Schema.Types.ObjectId, ref: "Website" },
  name: { type: String, require: true },
  title: { type: String, require: true }
});

module.exports = mongoose.model("Page", PageSchema);
