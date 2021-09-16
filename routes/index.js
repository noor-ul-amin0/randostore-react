const router = require("express").Router();

router.use("/api/products", require("./products"));
router.use("/api/categories", require("./category"));

module.exports = router;
