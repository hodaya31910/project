const router = require("express").Router();
const adminController = require("../controlers/adminControler");
const categoryController = require("../controlers/categoryControler");
const userController = require("../controlers/userControler");
const productController = require("../controlers/productControler");
//adminController
router.post("/creatCategory", adminController.createCategory);
router.delete("/deleteCategory", adminController.deleteCategory);
router.delete("/deleteProduct/:id", adminController.deleteProduct);
router.put("/updateCategory", adminController.updateCategory); // עובד
router.put("/updateProduct/", adminController.updateProduct);
router.post("/createProduct", adminController.createProduct);
router.delete("/deleteUser", adminController.deleteUser);
//categoryController
router.get("/getAllCategory", categoryController.getAllCategory);

//userController
router.post("/createUser", userController.createUser);
router.put("/updateUser", userController.updateUser);
router.get("/getShoppingCart", userController.getShoppingCart);
router.put("/addProduct", userController.addProduct);

//productController
router.get("/getAllProducts", productController.getAllProducts);
module.exports = router;
