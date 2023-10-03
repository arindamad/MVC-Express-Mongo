const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Product = require("../models/product.model");


const create = async (req, res, done) => {
    try { 
        const uniqueId = crypto.randomBytes(3).toString("hex").toLocaleUpperCase();       
        if(!req.product_name){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Please enter Product Name." }, null);
            return;
        }
        const obj={
            product_id: uniqueId,
            ...req   
        }        
        Query.Create('Product', obj, (error, result) => {             
            if (error) { 
                console.log(error)
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to create Product." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Added Product." });
                return
            }
        });
    }
    catch (error) {

    }

}


const list = async (req, res, done) => {
    try {   
        const products = await Product.find({}).populate('photo').exec();
        if (!products) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
        }
        else {                
            done(null, { responseCode: responseCodes.OK, result: products, message: "Successfully Added Product." });
            return
        }
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}

const getProducts = async (req, res, done) => {
    try {   
        const products = await Product.find({brand:req.brand, status:1}).populate('photo').populate('brand').exec();
        if (!products) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
        }
        else {                
            done(null, { responseCode: responseCodes.OK, result: products, message: "Successfully Added Product." });
            return
        }
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}


const Delete = async (req, res, done) => {
    Query.Delete('Product', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });    
};

const Update = async (req, res, done) => {
    Query.UpdateOne('Product', req, {_id:req._id}, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Updated Product Data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Updated Product Data." });
            return
        }
    });    
};



const Details = async (req, res, done) => {
    try {   
        const products = await Product.findOne(req).populate({
            path: 'photo category brand photo_gallery'                  
          }).populate({
            path: 'relatedProducts',
            select: 'product_id brand product_name photo',
            populate: [{ 
                path: 'brand', 
                select: 'brand_name'
            },
            {
                path: 'photo',
                select: 'alt_text image'
              }
            ],
          }).exec(); 
                 
        if (!products) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
        }
        else {                
            done(null, { responseCode: responseCodes.OK, result: products, message: "Successfully Added Product." });
            return
        }
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}




module.exports = {
    create,  list, getProducts, Delete,  Details, Update
}