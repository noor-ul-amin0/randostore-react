const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    title: { type: String, required: [true, "Category title is required."] }, // String is shorthand for {type: String}
    parentId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
