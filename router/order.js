//require express
const express = require("express");
const { getOrder, addOrder, updateOrder } = require("../controllers/order");

//reqquire router
const router = express.Router();

router.get('/', getOrder)

router.post('/addOrder',addOrder)

router.put('/update/:id',updateOrder)

module.exports = router;