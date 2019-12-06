const Sequelize = require("sequelize");
const db = require("../db");

db.define("Image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

module.exports = db;
