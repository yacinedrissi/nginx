const express = require("express");
const mongoose = require("mongoose");

const PORT = 4000;

const app = express();
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// connect to db
mongoose
  .connect(URI)
  .then(() => console.log("connect to db...."))
  .catch((err) => console.log("failed to connect to db : " + err));

app.get("/", (req, res) => res.send("<h1> HELLO WORLD WHY DEV   !! </h1>"));

app.listen(PORT, () => console.log(` app is up and running on port : ${PORT}`));
