const router = require("express").Router();

router
  .route("/")
  .get(async (req, res) => {
    res.send([]);
  })
  .post(async (req, res) => {
    res.sendStatus(201);
  });

module.exports = router;
