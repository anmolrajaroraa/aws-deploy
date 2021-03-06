const mongoose=require("mongoose");
const connection=require("../connection");

const Schema=mongoose.Schema;


const subProductSchema=new mongoose.Schema({
    subproductId:String,
    subproductName:String,
    info:{
        description:String,
        benefitsAndUses:String,
        priceAndAmount:[{
            amount:String,
            suffix:String,
            price:String,
            discount:String
        }],
    },
    imageUrls:[{
        uri:String
    }]
});

const productSchema=new mongoose.Schema({
    productName:String,
    productId:String,
    subProducts:[
        subProductSchema
    ]
});

const subCatSchema=new mongoose.Schema({
    subCategoryName:String,
    subCategoryId:String,
    products:[
        productSchema
    ],
});

const adminProductSchema=new mongoose.Schema({
    categoryId:String,
    categoryName:String,
    subcategory:[
        subCatSchema
    ],
})



module.exports={
    Products: mongoose.model("products",adminProductSchema),
    SubCat: mongoose.model("subcat",subCatSchema),
    Product1: mongoose.model("pro",productSchema),
    SubProduct: mongoose.model("subProduct",subProductSchema)

}