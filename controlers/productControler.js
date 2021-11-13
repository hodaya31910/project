const Product = require('../moduls/product');
//get all products

const getAllProducts=async (req, res) => {
    console.log("get all products");
    try {
        let products = await Product.find();
        if (products == null) {
            res.send("אין מוצרים להצגה ");
        }
        return res.json({ status: 200, products: products })
    }
    catch (error) {
        res.status(500).json({ eror: error.message })
    }
}

module.exports = {getAllProducts  };