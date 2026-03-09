const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const templeRoutes = require("./routes/templeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});