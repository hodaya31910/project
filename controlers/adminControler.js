const Admin = require("../moduls/admin");
const Category = require("../moduls/category");
const Product = require("../moduls/product");
const User = require("../moduls/user");
//create category
const createCategory = async (req, res) => {
  console.log("create category");
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json({ newCategory: newCategory });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

//delete category
const deleteCategory = async (req, res) => {
  console.log("deleteCategory");
  try {
    let categoryToDelete = await Category.findById(req.body.id);
    // await Product.deleteMany(category =req.body.id, Product.Category);

    await categoryToDelete.remove();
    res.status(200).json({ categoryToDelete: categoryToDelete });
  } catch (err) {
    res.status(500).json({ myMessage: err.message });
  }
};
//updateCategory
const updateCategory = async (req, res) => {
  console.log("updateCategory");
  try {
    let updateCategory = await Category.findByIdAndUpdate(
      req.body.id,
      req.body
    );
    res.status(200).json({ updateCategory: updateCategory });
  } catch (error) {
    res.status(500).json({ err: error.messege });
  }
};
//createProduct
const createProduct = async (req, res) => {
  console.log("create category");
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    const cat = await Category.findById(req.body.category);
    cat.products.push(newProduct);
    res.status(200).json({ newProduct: newProduct, category: cat });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// deleteProduct
const deleteProduct = async (req, res) => {
  console.log("deleteProduct");
  try {
    // let productToDelete=new Product();
    // productToDelete = await Product.findById(req.params.id);
    // let categoryDP = await Category.findByIdAndUpdate(
    //   productToDelete.category,
    //   { $pull: { category: productToDelete._id } },
    //   { new: true }
    // );
    // await productToDelete.remove();
    // res
    //   .status(200)
    //   .json({ productToDelete: productToDelete, categoryDP: categoryDP });
    let productToDelete = await Product.findById(req.params.id);
    console.log(productToDelete)
        let catD = await Category.findByIdAndUpdate(productToDelete.category,
            { $pull: { productToDelete: productToDelete._id } }, { new: true });

        await productToDelete.remove();

        res.status(200).json({ productToDelete: productToDelete, categoryToDelete: catD });
  } 
  catch (err) {
    res.status(500).json({ myMessage: err.message });
  }
};
//updateProduct
const updateProduct = async (req, res) => {
  console.log("updateProduct");
  try {
    let updateProduct = await Product.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ updateProduct: updateProduct });
  } catch (error) {
    res.status(500).json({ err: error.messege });
  }
};
// deleteUser,
const deleteUser = async (req, res) => {
  console.log("deleteUser");
  try {
    let userToDelete = await User.findById(req.body.id);
    await userToDelete.remove();
    res.status(200).json({ userToDelete: userToDelete });
  } catch (err) {
    res.status(500).json({ myMessage: err.message });
  }
};
module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  createProduct,
  deleteProduct,
  deleteUser,
  updateProduct,
};
