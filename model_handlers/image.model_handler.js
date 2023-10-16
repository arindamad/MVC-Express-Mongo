const Query = require("../utils/query-creator");
const responseCodes = require('../utils/response-codes');
const config = require('../config/config.json')
require('dotenv').config();
const mongoose = require('mongoose');
const Image = require('../models/images.model')


const create = async (req, res, done) => {   
    try {              
        Query.Create('Image', req, (error, result) => {             
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
        done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    }

}

const list = async (req, res, done) => {
    try {                 
        Query.Find('Image', req, (error, result) => {          
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
            }
            else { 
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Get all Images." });
                return
            }
        })
    
    }
    catch (error) {

    }
    
}

const fs = require('fs');

const Delete = async (req, res, done) => {  
    Image.findOneAndRemove({ id: req._id }, function(error, doc) {
        if (error) {
            done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
            return;
        }
        // console.log(doc)
        fs.access(doc.image, fs.constants.F_OK, (err) => {
            if (err) {
              console.error('File does not exist:');
              return;
            }
          
            // File exists, proceed to delete it
            fs.unlink(doc.image, (err) => {
              if (err) {
                console.error('Error deleting file:', err);
              } else {
                done(null, { responseCode: responseCodes.OK, result: [], message: "Successfully Deleted data." });
                console.log('File deleted successfully:');
              }
            });
        });
    });
};


const update = async (req, res, done) => {
    try {                 
        Query.UpdateOne('Image', req, {_id:req._id} , (error, result) => {          
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to Update." }, null);
            }
            else { 
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Updated Images." });
                return
            }
        })
    
    }
    catch (error) {

    }
    
}




module.exports = {
    create,  list, Delete, update
}