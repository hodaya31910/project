const Category = require('../moduls/category');
const Product = require('../moduls/product');

//getAllCategory
const getAllCategories=async (req, res) => {
    console.log("get all categories");
    try {
        let category = await Category.find().populate('products');
        if (category == null) {
            res.send("אין קטגוריות להצגה ");
        }
        return res.json({ status: 200, category: category })
    }
    catch (error) {
        res.status(500).json({ eror: error.message })
    }
}
module.exports = {  getAllCategories};