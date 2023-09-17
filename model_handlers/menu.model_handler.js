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
const Page = require("../models/menu.model"); 

const create = async (req, res, done) => { 
    try {           
        Query.Create('Menu', req, (error, result) => {              
            if (error) { 
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to create Menu." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Created Menu." });
                return
            }
        });
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
}

const list = async (req, res, done) => {
    try {           
        Query.Find('Menu', req, (error, result) => {              
            if (error) { 
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Fetch Menus." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Fetched Menu." });
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
        Query.UpdateOne('Menu', req, {_id:req._id}, (error, result) => {              
            if (error) { 
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Update Menu." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Updatd Menu." });
                return
            }
        });
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }    
}


  
const Delete = async (req, res, done) => {
    Query.Delete('Menu', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });    
};








module.exports = {
    create, list, Delete, update
}