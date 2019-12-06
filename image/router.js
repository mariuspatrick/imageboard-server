const { Router } = require("express");
const image = require("./model");

const router = new Router();

router.get("/image", (req, res) => {
  image.findAll().then(result => res.send(result));
});

router.post("/image", (req, res) => {
  image
    .create(req.body)
    .then(result => res.send(result))
    .catch(console.error);
});

module.exports = router;
