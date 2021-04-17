const Product = require("../models/Product")



 //********************routes ***************
                /**
                 * @desc: test route
                 * @path : "http://localhost:6000/api/Products/test"
                 * @method : "GET"
                 * @data : no data 
                 * @access : public
                 * 
                 */

exports.getTest = async(req,res) =>{
                        res.send("hello Product")                }


                         // *********************        ADD 
                /**
                 * @desc: add Product
                 * @path : "http://localhost:7000/api/product/addProd"
                 * @method : "POST"
                 * @data : req.body
                 * @access : public
                 * 
                 */
exports.addProduct = async(req,res) => {

         try {
                        const { name, Price, description } = req.body
                        //mail and name are required
                        if(!name || !Price ){ return res.status(400).send("mail and name are required")}

                        
                        const newProduct = new Product({ name, Price, description })
                        await newProduct.save()
                        res.status(200).send({msg : 'Product is saved', newProduct}) 
                                
                  } catch (error) {
                       res.status(400).send({msg : 'Product not save', error})
                  }
              

        
}   

/** 
 * GET all
 *  */

                                        /**
                 * @desc: get all
                 * @path : "http://localhost:7000/api/product"
                 * @method : "GET"
                 * @data : no data 
                 * @access : public
                 * 
                 */

exports.getAllProducts = async (req, res) => {
    try {
        const listProducts = await Product.find()
        res.status(200).send({ msg: 'This is the list of products ...', listProducts })
    } catch (error) {
        res.status(400).send({ msg: `Can not get products!! ${error}`})
    }
    }                   

                    //******************** Get One Product ***************
                        /**
                         * @desc: get One Products
                         * @path : "http://localhost:7000/api/product/60730996528d932648066523"
                         * @method : "GET"
                         * @data : req.params 
                         * @access : public
                         * 
                         */

exports.getOneProduct = async (req,res) => {
                        try {
                                const productToFind = await Product.findOne({ _id: req.params.id })
                                res.status(200).send({ msg: 'this is one Product ... ', productToFind })
                        } catch (error) {
                                res.status(400).send({msg: 'can not get this id ... ',error })
                        }
                }


                //******************** Get ALL Product ***************
                /**
                 * @desc: get ALL Product
                 * @path : "http://localhost:7000/api/product/"
                 * @method : "GET"
                 * @data : req.params
                 * @access : public
                 * 
                 */

exports.getAllProduct = async(req,res) => {
                        try {
                                const listProduct = await Product.find()
                                res.status(200).send({ msg : 'this is all Product ... ', listProduct })
                        } catch (error) {
                                res.status(400).send({msg: 'can not getting all Product ... ',error })
                        }
                }                


                 //******************** Delete Product ***************
                /**
                 * @desc: Delete Product
                 * @path : "http://localhost:7000/api/product/:id"
                 * @method : "DELETE"
                 * @data : req.params
                 * @access : public
                 * 
                 */

exports.deleteProduct =  async(req,res) => {
                        try {
                                const { _id } = req.params
                                  const productToDelete =  await Product.deleteOne({ _id })
                                  if (!productToDelete) {
      res.status(200).send({ msg: 'Product already deleted ...' })
      return
    }
    res.status(200).send({ msg: 'Product deleted ...', productToDelete })
                        } catch (error) {
                                res.status(400).send({msg: 'can not deleted ... ',error })
                        }
                }                


                 //******************** update Product ***************
                /**
                 * @desc: update Product
                 * @path : "hhttp://localhost:7000/api/product/:id"
                 * @method : "put"
                 * @data : req.params && req.body
                 * @access : public
                 * 
                 */

exports.updateProduct = async(req,res) => {
                        try {
                                  const { _id } = req.params
                                  const productToUpdate =  await Product.updateOne({ _id } ,{$set:{...req.body} })
                                res.status(200).send({ msg : 'this product e updating ... ',productToUpdate })
                        } catch (error) {
                                res.status(400).send({msg: 'cant updated ... ',error })
                        }
                }                