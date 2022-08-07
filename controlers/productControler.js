const Product = require("../moduls/product");
//get all products

const getAllProducts = async (req, res) => {
  console.log("get all products");
  let categoryId = req.body.categoryId;
  let products;
  try {
    if (categoryId) {
      //   let category = await Product.findById(categoryId);
      //   products = category.Product;
    } else {
      products = await Product.find();
    }
    if (products == null) {
      res.send("אין מוצרים להצגה ");
    }

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ eror: error.message });
  }
};

module.exports = { getAllProducts };
