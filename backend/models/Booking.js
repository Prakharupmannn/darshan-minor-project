const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  templeId: String,
  date: String,
  slot: String
});

module.exports = mongoose.model("Booking", bookingSchema);