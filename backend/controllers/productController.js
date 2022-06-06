const req = require('express/lib/request');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');

// CREATE PRODUCT -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next)=>{
    const product =await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

// GET ALL PRODUCTs

exports.getAllProducts = catchAsyncErrors(async (req, res)=>{
    const products =await Product.find();
    res.status(200).json({
        success: true,
        products
    });
});


// UPDATE PRODUCT -- ADMIN

exports.updateProduct = catchAsyncErrors(async(req, res ,next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not Found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify: false
    });

    res.status(200).json({
       success: true,
       product
   });


});


// DELETE PRODUCT

exports.deletProduct = catchAsyncErrors(async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler("Product not Found", 404));
    }

    await product.remove(req.params.id);
    res.status(200).json({
        success: true,
        message:"Product Deleted"
    });
});

// GET PRODUCT DETAILS

exports.getProductDetails = catchAsyncErrors(async (req, res , next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not Found", 404));
    }

    res.status(200).json({
        success: true,
        product
    })
});