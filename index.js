const db = require("./db");
const express = require("express");
const model = require("./image/model");
const imageRouter = require("./image/router");

const app = express();

const port = process.env.PORT || 4000;

app.use(imageRouter);
app.listen(port, console.log(`Listening on port: ${port}`));
