const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[30,"Name Can't exceed 30 charatcers"],
        minlength:[4, "more than 4 character"],
    },
    email:{
        type:String,
        required:[true, "Pls enter your email"],
        unique: true,
        validate: [validator.isEmail,"Enter Valid Email"],
    },
    password:{
        type: String,
        required:[true,"Must Enter a Password"],
        minlength:[6,"must be grater than 5"],
        select:false,
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        }
    },
    role:{
        type: String,
        default: "user",
    },

});


module.exports = mongoose.model("User", userSchema)