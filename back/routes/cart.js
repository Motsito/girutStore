const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  deleteAllProducts,
} = require("../controllers/cart");

router
  .route("/")
  .get(getAllProducts)
  .post(addProduct)
  .delete(deleteAllProducts);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

//CRUD Create read update delete

module.exports = router;
