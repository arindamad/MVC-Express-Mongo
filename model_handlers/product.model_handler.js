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
        })


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
        const products = await Product.find({status:1}).populate('photo').populate('brand').exec();
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

const search = async (req, res, done) => {
    const regex = new RegExp("^"+req.search_keyword, 'i');
    const searchQuery = {
        $and: [
          { role: config.role.doctor.title },
          {
            $or: [
              { first_name: regex },
              { last_name: regex },
              { doctor_specialization: regex }
            ]
          }
        ]
    };
    
    User.find(searchQuery)   
    .exec((err, result) => {
        if (err) {
        // handle error
        done({ responseCode: responseCodes.Unauthorized, result: [], message: err }, null);
        } else {
        // handle success
        done(null, { responseCode: responseCodes.OK, result: result, message: (result.length>1 ? result.length +" doctors found":result.length==0?"No Doctor Found": result.length +" doctor found")});
        }
    });
        
}

const filter = async (req, res, done) => {
    console.log(req);
    if(req.filterby==="clinic"){
        Slot.aggregate([
            { $match: { clinic: mongoose.Types.ObjectId(req.filter_val) } },
            {
              $group: { 
                _id: '$doctor',
                doctor: { $first: '$doctor' },
                capacity: { $first: '$capacity' },
                start_time: { $first: '$start_time' },
                end_time: { $first: '$end_time' },
                status: { $first: '$status' },
              },
            },
            {
              $lookup: {
                from: 'users', // Replace with the actual collection name of the User model
                localField: 'doctor',
                foreignField: '_id',
                as: 'doctor_data',
              },
            },
            {
                $unwind: '$doctor_data',
            },
            {
                $replaceRoot: { newRoot: '$doctor_data' },
            },
            {
                $project: {
                    password: 0,
                },
            },
            ])
            .exec((err, slots) => {
              if (err) {
                // console.error(err);
                // Handle the error
                done({ responseCode: responseCodes.OK, result: err, message: "Successfully get doctors"}, null);


              } else {
                // Process the slots data
               
                console.log(slots);
                done(null, { responseCode: responseCodes.OK, result: slots, message: "Successfully get doctors"});
              }
            });
    }else if(req.filterby==="doctor_experience" && req.filterby==="doctor_experience"){

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
    create,  search, list, filter, getProducts, Delete,  Details
}