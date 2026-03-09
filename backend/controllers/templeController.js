const Temple = require("../models/Temple");

exports.getTemples = async (req, res) => {
  const temples = await Temple.find();
  res.json(temples);
};

exports.addTemple = async (req, res) => {
  const temple = new Temple(req.body);
  await temple.save();
  res.json({ message: "Temple Added" });
};