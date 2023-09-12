const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity must be provided"],
  },
});

module.exports = mongoose.model("Cart", cartSchema);
