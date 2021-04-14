const mongoose = require('mongoose')


//creation schema
const {Schema} = mongoose

const productSchema = new Schema({
     name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  category: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required:true,
    },

    description:{
      type: String 
    
    }

    /* created_at:{ type: Date, default: Date.now },
    updated_at:{ type: Date, default: Date.now }, */
  },{ timestamps: true })
module.exports = product = mongoose.model("product",productSchema)