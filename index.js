const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const emailRouter = require("./routes/email");

//-------App
const app = express();

env.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

// routes
app.use("/api", emailRouter);

// server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
