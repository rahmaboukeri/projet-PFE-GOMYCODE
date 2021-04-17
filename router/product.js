const express =require("express")
// routes
const router = express.Router()


const { getTest, 
        addProduct, 
        getOneProduct, 
        
        deleteProduct,
        updateProduct, 
        getAllProducts} = require("../controllers/product")


router.get("/test",getTest)


router.post('/addProd',addProduct)

/**
 * @desc : get all products
 * @method : GET
 * @path : http://localhost:7000/api/product
 * @data : no data
 * @acess : public
 */
router.get("/", getAllProducts);

router.get('/:id',getOneProduct)

// router.get("/",getAllContact)

router.delete('/:_id',deleteProduct)

router.put('/:_id',updateProduct)


module.exports = router