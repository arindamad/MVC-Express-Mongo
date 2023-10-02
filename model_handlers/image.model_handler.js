const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
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
  
    // Image.findOneAndremove({ id: req.params.todoId }, function( error, doc, result) {
       
    //     if (err) done({ responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." }, null);
    

    //     fs.access(doc.image, fs.constants.F_OK, (err) => {
    //         if (err) {
    //           console.error('File does not exist:', filePath);
    //           return;
    //         }
          
    //         // File exists, proceed to delete it
    //         fs.unlink(filePath, (err) => {
    //           if (err) {
    //             console.error('Error deleting file:', err);
    //           } else {
    //             done(null, { responseCode: responseCodes.InternalServer, result: [], message: "Successfully Deleted data." });
    //             console.log('File deleted successfully:', filePath);
    //           }
    //         });
    //       });

    //     res.send(doc.id);

    // });
      
      
      
      
      
    try {  
                       
        Query.Delete('Image', req, (error, result) => {             
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
            }
            else {                
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Get all Images." });
                return
            }
        });    
    }
    catch (error) {

    }
    
}






module.exports = {
    create,  list, Delete 
}