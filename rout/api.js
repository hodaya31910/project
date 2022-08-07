const router = require("express").Router();
const adminController = require("../controlers/adminControler");
const categoryController = require("../controlers/categoryControler");
const userController = require("../controlers/userControler");
const productController = require("../controlers/productControler");
const contactControler = require("../controlers/contactControler");
//adminController
router.post("/creatCategory", adminController.createCategory);
router.delete("/deleteCategory", adminController.deleteCategory);
router.delete("/deleteProduct/:id", adminController.deleteProduct);
router.put("/updateCategory", adminController.updateCategory); // עובד
router.put("/updateProduct/", adminController.updateProduct);
router.post("/createProduct", adminController.createProduct);
router.delete("/deleteUser", adminController.deleteUser);
//categoryController
router.get("/getAllCategories", categoryController.getAllCategories);

//userController
router.post("/user/createUser", userController.createUser);
router.post("/usr/login", userController.login);
router.put("/user/updateUser", userController.updateUser);
router.get("/getShoppingCart", userController.getShoppingCart);
router.put("/addProduct", userController.addProduct);

//productController
router.get("/products/getAllProducts", productController.getAllProducts);

//contact
router.post("/contact", contactControler.contact);

module.exports = router;
