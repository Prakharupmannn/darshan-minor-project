
const express = require("express");
const router = express.Router();

const { getTemples, addTemple } = require("../controllers/templeController");

router.get("/", getTemples);
router.post("/add", addTemple);

module.exports = router;