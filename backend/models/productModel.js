const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "Pls Enter Product Name"],
        trim:true
    },
    description:{
        type: String,
        required:[true, "Pls Enter Product Desc"]
        
    },
    price:{
        type: Number,
        required:[true, "Pls Enter Product Price"],
        maxlenght:[6, "Price cann't exceed 8 characters"]
    },
    rating:{
        type: Number,
        default:0
    },
    images:[
        {
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
        }
    ],
    category:{

        type:String,
        required:[true,"Pls enter product Category"],
    },
    stock:{
        type:Number,
        required:[true,"Pls enter product Stcok"],
        maxlenght:[4,"Stock cann't exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default: 0
    },
    reviews:[
        {
            name:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Product", productSchema);