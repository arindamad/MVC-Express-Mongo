const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const ReportCategory = require("../models/report_category.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const create = async (req, res,  done) => {  
    try {        
        
        if(!req.name){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Name is required." },null);
            return;
        }
        if(req.parent){
            let parent = await validateParent(req.parent);
            if(!parent) {
                done({ responseCode: responseCodes.Conflict, result: [], message: "Parent Category is not valid." },null);
                return;
            } 
            
        } 

        Query.Create('report_category', req, (error, result) => {
            done(null,{ responseCode: responseCodes.OK, result: result, message: "Category created successfully." });
        });
    }
    catch (error) {

    }
}



const validateParent = async _id => {
    let CategoryId = await ReportCategory.findOne({ _id });
    console.log(CategoryId)
    return CategoryId ? true : false;
};



const list = async (req, res, done) => {
    Query.Find('report_category',  (error, result) => {
        if (error) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);

        }
        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
            return
        }
    })
}

const delete_user = async (req, res, done) => {
    Query.Delete('report_category', req, (error, result) => {
        if (error)
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." }, null);

        else {
            if(result.deletedCount){
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            }else{
                done({ responseCode: responseCodes.ResourceNotFound, result: result, message: "Category Id Not found." }, null);

            }
            return
        }
    })
}

const update = async (req, res, done) => {
    
    try {
        // Find the report category by ID and update it
        const category = await ReportCategory.findByIdAndUpdate(req._id, req, { new: true });
    
        if (!category) {
          return done({ responseCode: responseCodes.ResourceNotFound, result: {}, message: 'Report category not found' }, null);
        }
        return done( null, { responseCode: responseCodes.ResourceNotFound, result: category, message: 'Successfully Updated Category' }); 
      } catch (error) {
        console.error(error);
        return done({ responseCode: responseCodes.InternalServer, result: [], message: 'Internal server error' }, null); 

      }

   

}


const image_upload = async (req, res, done) => {

    console.log(req.body._id)
    var ObjectId = require('mongodb').ObjectID;
    let bucketName;
    let fileName;
    let dbName;
    if (req.body.type == "client") {
        bucketName = config[process.env.NODE_ENV].AWS_CLINETS_BUCKET;
        dbName = 'Clients'
        Query.Find('Clients', { "_id": ObjectId(req.body._id) }, (error, result) => {

            if (error) {
                done(null, { responseCode: responseCodes.Invalid, result: [], message: "Failed: No such client " });
                return;

            }
            else {
                console.log(result[0].photo)
                fileName = result[0].photo
            }
        })


    } else {
        bucketName = config[process.env.NODE_ENV].AWS_USERS_BUCKET;
        dbName = 'User'
        Query.Find('User', { "_id": Object(req.body._id) }, (error, result) => {

            if (error) {
                done(null, { responseCode: responseCodes.Invalid, result: [], message: "Failed: No such user " });
                return;

            }
            else {
                console.log(result[0].photo)

                fileName = result[0].photo
            }
        })
    }

    console.log(bucketName)

    let fileType = req.files.photo.name.split('.').pop();
    req.files.photo['file_name'] = req.files.photo.name + Date.now() + '.' + fileType;


    s3Handler.upload(req.files.photo, bucketName, fileType, (error, imageData) => {
        if (error) {
            done(null, { responseCode: responseCodes.Invalid, result: [], message: "Failed: Try again Later" });
            return;
        }
        else {

            if (fileName != null) {
                s3Handler.deleteFile(fileName, bucketName, (err, data) => {

                    if (err) console.log(err)

                    else {

                        console.log(data)

                    }
                })
            }
            let finalimagename = getImageNameFromURL(imageData.Location)
            console.log(finalimagename)

            Query.Update(dbName, { "photo": finalimagename }, { "_id": req.body._id }, (error, result) => {
                if (error) {
                    done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

                }
                else {
                    done(null, { responseCode: responseCodes.OK, result: finalimagename, message: "Success" });

                    return
                }
            });


            // done(null, { responseCode: responseCodes.OK, result: finalimagename, message: "Success" });
            // return
        }




    });
}

function getImageNameFromURL(URL) {
    if (URL) {
        var mainImageUploadURL = URL; //uploadPhoto = AWS return object 
        var normalImageUploadURL = mainImageUploadURL.lastIndexOf('/');
        var finalImageURL = mainImageUploadURL.substring(normalImageUploadURL + 1);
        return finalImageURL;
    }
}

module.exports = {

    create,  delete_user, image_upload, list, update
}