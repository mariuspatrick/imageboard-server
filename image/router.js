const { Router } = require("express");
const image = require("./model");

const router = new Router();

router.get("/image", (req, res) => {
  image.findAll().then(result => res.send(result));
});

module.exports = router;
