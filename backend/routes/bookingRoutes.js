const express = require("express");
const router = express.Router();

const { bookDarshan } = require("../controllers/BookingController");

router.post("/book", bookDarshan);

module.exports = router;