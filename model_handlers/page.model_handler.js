const Query = require("../utils/query-creator");
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Page = require("../models/pages.model"); 


const create = async (req, res, done) => {    
    try {   
        const nameS =  req.page_name; 
        if (!req.page_name) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Please add Page name." }, null);
        }  
        const page_slug =   nameS.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')  
        req.page_slug = page_slug;
        Query.Create('Page', req, (error, result) => {    
                       
            if (error) {
                if (error.code === 11000) {
                  done(
                    {
                      responseCode: responseCodes.Unauthorized,
                      result: [],
                      message: "Duplicate! Page name already exists.",
                    },
                    null
                  );
                } else {
                  done(
                    {
                      responseCode: responseCodes.Unauthorized,
                      result: [],
                      message: "Unable to create Page.",
                    },
                    null
                  );
                }
              } else {
                done(null, {
                  responseCode: responseCodes.OK,
                  result: result,
                  message: "Successfully Added Page.",
                });
              }             
        })
    }
    catch (error) {        
        done({ responseCode: responseCodes.InternalServer, result: {error:error}, message: "Internal Server Error." }, null);
    }

}


const list = async (req, res, done) => {
    try {           
        Query.Find('Page', req, {}, (error, result) => {              
            if (error) { 
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to create Product." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Added Product." });
                return
            }
        });
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}
const update = async (req, res, done) => {     
    try {           
        Query.UpdateOne('Page', req, {_id:req._id}, (error, result) => {              
            if (error) { 
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Updated Page." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Updated Page." });
                return
            }
        });
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }    
}
  
const Delete = async (req, res, done) => {
    Query.Delete('Page', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
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
            select: 'product_id brand product_name',
            populate: { 
                path: 'brand', 
                select: 'brand_name'
            }
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
    create, list, Delete, Details, update
}