let express = require('express');
let router = express.Router();
const usersController =  require("../controllers/usersController.js");
const authMiddleware = require("../middlewares/authMiddleware")
router.get('/productCart',usersController.carrito);
router.get('/wishlist', authMiddleware,usersConbtroller.wishlist)
module.exports = router;