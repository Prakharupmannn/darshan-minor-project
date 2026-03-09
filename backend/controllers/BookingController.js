const Booking = require("../models/Booking");

exports.bookDarshan = async (req, res) => {

  const booking = new Booking(req.body);

  await booking.save();

  res.json({ message: "Darshan Booked Successfully" });

};