const Category = require("../models/Category")

/**
 * add 
 *  */
exports.postCategory=async(req,res)=>{
try {
const { name  } = req.body
    // handling errors : email & name are required
    if (!name) {
    res.status(400).send({ msg: 'Category added failed !!!' })
    return;
    }
    // handling errors : test if Category already exist with name
    const category = await Category.findOne({ name })
    if (category) {
        res.status(400).send({ msg: 'Category already exist !!!' })
    return;}
    /* if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    } */
    // create and save the new category
const newCategory = new Category({ name  })
await newCategory.save()
    res.status(200).send({ msg: 'Category added successfully ...', newCategory })
} catch (error) {
    res.status(500).send({ msg: `impossible to add new Category ${error}` })
}
}


/**GET all* */
exports.getAllCats = async (req, res) => {
    try {
        
        const listCategories = await Category.find()
        res.status(200).send({ msg: 'This is the list of category ...', listCategories })
    } catch (error) {
        res.status(400).send({ msg: `Can not get all users !! `,error})}}