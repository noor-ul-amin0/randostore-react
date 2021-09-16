const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const Category = require("../../modals/category");
router
  .route("/")
  .get(
    asyncHandler(async (req, res) => {
      const categories = await Category.find();
      res.send({ success: true, data: categories });
    })
  )
  .post(
    asyncHandler(async (req, res) => {
      await Category.create(req.body);
      res
        .send(201)
        .send({ success: true, message: "Category created successfully." });
    })
  );

module.exports = router;
