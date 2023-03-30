const express = require('express');
const router = express.Router();
const admController =  require("../controllers/admController.js");

router.get("/add", admController.agregado);

router.post('/add', admController.guardarProducto);

router.get("/edit", admController.editado);

module.exports = router;