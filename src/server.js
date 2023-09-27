const express = require("express");
const cors = require("cors");

const app = express();

const customerRoute = require("./routes/customer");
const cloudinaryRoute = require("./routes/cloudinary");

app.use(cors());
app.use(express.json());

app.use("/customer", customerRoute);
app.use("/cloudinary", cloudinaryRoute);

app.get("/", (req, res) => {
  res.send("hejsa");
});

app.listen(3001, () => {
  console.log("Server open on port 3001");
});

