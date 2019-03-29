const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});


mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
