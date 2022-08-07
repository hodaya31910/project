const Product = require("../moduls/product.js");
const User = require("../moduls/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//createUser
const createUser = async (req, res) => {
  console.log("create user");
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const newUser = new User(req.body);
    const token = jwt.sign(
      { name: newUser._id, password: newUser.password },
      process.env.SECRET
    );
    newUser.token = token;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (user && password === user.password) {
      // Create token
      const token = jwt.sign(
        { name: user._id, password: user.password },
        process.env.SECRET
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

//updateUser
const updateUser = async (req, res) => {
  console.log("updateUser");
  try {
    const user = await User.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ updateUser: user, message: "user is update" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

//addProduct
//צריך לבדוק אם המוצר קיים במלאי
const addProduct = async (req, res) => {
  console.log("add Product to getShopping Cart");
  try {
    const product = new Product({
      name: req.body.nameP,
      amount: req.body.amount,
      id: req.body.idP,
    });
    const user = await User.findById(req.body.id);
    const findProduct = await Product.findById(product.id);
    await product.save();
    user.products.push(product);
    await user.save();
    res.status(200).json({ user: user });
    // if (product.amount > 0) {
    //   product.amount -= 1;
    //   await product.save();
    //   user.products.push(product);
    //   await user.save();
    //   res.status(200).json({ user: user });
    // } else {
    //   console.log("המוצר לא קיים במלאי");
    //   res.status(500).json({ err: err });
    // }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
//deleteProductFromShopping(מחיקת מוצר מסל הקניות שלו)
const deleteProductFromShopping = async (req, res) => {
  console.log("delete Product From Shopping cart");
  try {
    const product = new Product({
      name: req.body.nameP,
      amount: req.body.amount,
      id: req.body.idP,
    });
    const user = await User.findById(req.body.id);
    product.amount += 1;
    await product.save();
    user.products.remove(product);
    await user.save();
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
//getShoppingCart (צפיה ברשימת מוצרים שלו- הפונקציה צריכה לשלוף את מערך הproduct ששייך לו)
const getShoppingCart = async (req, res) => {
  console.log("get shoping cart");
  try {
    let user = await User.findById(req.body.id);
    products = user.products;
    return res.json({ status: 200, cart: products });
  } catch (error) {
    res.status(500).json({ eror: error.message });
  }
};
module.exports = {
  login,
  createUser,
  updateUser,
  addProduct,
  deleteProductFromShopping,
  getShoppingCart,
};
