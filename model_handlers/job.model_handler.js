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
const Jobs = require("../models/jobs.model");


const create = async (req, res, done) => {
    try { 
        const uniqueId = crypto.randomBytes(2).toString("hex").toLocaleUpperCase(); 
        const obj={
            job_id: "JOB"+uniqueId,
            ...req   
        }               
        Query.Create('Job', obj, (error, result) => {             
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
        Query.Find("Job", req, (error, result) => {             
            if (error) {                
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Fetched." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Fetched Jobs." });
                return
            }
        })       
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}

const getActive = async (req, res, done) => {
    try {  
        Query.Find("Job", {_id:req._id, status:1}, (error, result) => {             
            if (error) {                
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Fetched." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Fetched Active Jobs." });
                return
            }
        });
    }
    catch (error) {
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }
    
}


const Delete = async (req, res, done) => {
    Query.Delete('Job', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });    
};

const Update = async (req, res, done) => {
    Query.UpdateOne('Job', req, {_id:req._id}, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Updated Product Data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Updated Product Data." });
            return
        }
    });    
};


module.exports = {
    create,  list, getActive, Delete,   Update
}