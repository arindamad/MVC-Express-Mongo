const Query = require("../utils/query-creator");
const responseCodes = require("../utils/response-codes");
const config = require("../config/config.json");
require("dotenv").config();
const Brand =  require('../models/brands.model');



const create = async (req, res, done) => {
    try {  
        if (!req.brand_name) {
            done(null, {
                responseCode: responseCodes.Conflict,
                result: [],
                message: "Please enter Brand Name",
            });
            return;
        }   

        Query.Create('Brand', req, (error, result) => {
            if (error) {
                console.log(error)
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);
            }
            else {
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Created Brand." });
                return
            }
        });

    } catch (error) {
        console.log(error)
        done(null, {
            responseCode: responseCodes.InternalServer,
            resulSuccesst: [],
            message: "Internal Server Error.",
        });
    } 
};


const list = async (req, res, done) => {  
    try{
        const result = await Brand.find(req).populate('brand_category').populate('image').populate('inner_banner').exec();
        if (!result) {
            done(null, {
                responseCode: responseCodes.ResourceNotFound,
                result: [],
                message: "Resource Not Found",
            });
        } else {
            done(null, {
                responseCode: responseCodes.OK,
                result: result,
                message: "Successfully Fetched.",
            });
            return;
        }

    }catch(e){
        done(null, {
            responseCode: responseCodes.InternalServer,
            result: [],
            message: "Internal Server Errror.",
        });
    }
};


const Delete = async (req, res, done) => {
    Query.Delete('Brand', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });    
};
const update = async (req, res, done) => { 
    Query.UpdateOne('Brand', req, {_id:req._id}, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Update data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Updated Brand" });
            return
        }
    });    
};

module.exports = {
    create,   
    list, 
    Delete,
    update
};
