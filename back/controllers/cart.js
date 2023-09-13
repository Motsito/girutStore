const Cart = require("../models/cart");

const addProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  const productObject = { name, price, quantity };

  const product = await Cart.create(productObject);
  res
    .status(201)
    .json({ msg: `product with name: ${name} added successfully`, product });
};

const getAllProducts = async (req, res) => {
  const productsList = await Cart.find({});

  res.status(200).json(productsList);
};

const updateProduct = async (req, res) => {
  const { id: productID } = req.params;
  const { quantity } = req.body;

  const updatedProduct = await Cart.findOne({ _id: productID });

  if (!updatedProduct) {
    return res
      .status(404)
      .json({ msg: `Product with ID ${productID} not found` });
  }

  updatedProduct.quantity = quantity;

  const product = await Cart.findOneAndUpdate(
    { _id: productID },
    updatedProduct,
    {
      new: true,
      runValidators: true,
    }
  );

  res
    .status(200)
    .json({ msg: `product with id${productID} updated successfully`, product });
};

const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Cart.findOneAndDelete({ _id: productID });

  if (!product) {
    res.status(404).json({
      msg: `No product with id:${productID}...`,
      productID: productID,
    });
  }

  res
    .status(200)
    .json({ msg: `product with id${productID} deleted successfully`, product });
};

const deleteAllProducts = async (req, res) => {
  await Cart.deleteMany({});

  res.status(200).json({ msg: "All documents deleted successfully" });
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  deleteAllProducts,
};
