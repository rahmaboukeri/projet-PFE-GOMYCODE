const express = require("express");
const router = express.Router();
const {postCategory , getAllCats } = require("../controllers/category")





/**
 * @desc : add category
 * @method : POST
 * @path : http://localhost:7000/api/category/create
 * @data : req.body
 * @acess : public
 */
router.post("/create",postCategory);

/**
 * @desc : get all categories
 * @method : GET
 * @path : http://localhost:7000/api/category
 * @data : no data
 * @acess : public
 */
router.get('/', getAllCats)

module.exports = router