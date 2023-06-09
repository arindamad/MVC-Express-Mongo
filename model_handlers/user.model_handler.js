const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const create = async (req, res,  done) => { 
    try {        
        const uniqueId = crypto.randomBytes(3).toString("hex").toLocaleUpperCase(); 
        if(!req.mobile){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Phone no is required." },null);
            return;
        }
        // validate the phone
        let phoneNotRegistered = await validatePhone(req.mobile);
        if (!phoneNotRegistered) {
            done({ responseCode: responseCodes.Conflict, result: [], message: "Phone is already registered." },null);
            return;
        }
        if(!req.password){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Please enter password." },null);
            return;
        }

        // Get the hashed password
        const password = await bcrypt.hash(req.password, 12);

        let obj = {
           ...req,
           role:config.role.patient.title,
           password,
           uid:uniqueId,
           status:1
        }

        Query.Create('User', obj, (error, result) => {
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);
            }
            else {
                let token = jwt.sign(
                    {
                      user_id: result._id,
                      role: result.role,
                      mobile: result.mobile,
                      uid: result.uid
                    },
                    config.development.secret,
                    { expiresIn: "7 days" }
                  );
                let myResponse = {
                    first_name: result.first_name,
                    last_name: result.last_name,
                    uid: result.uid,
                    _id: result._id,
                    dob:result.dob,
                    weight:result.weight,
                    height:result.height,
                    bloodGroup:result.bloodGroup,
                    email: result.email,
                    photo:result.photo,
                    lat:result.lat,
                    long:result.long,
                    zip:result.zip,
                    address:result.address,
                    city:result.city,
                    state:result.state,
                    country:result.country,
                    role:result.role,
                    token : token,
                    expiresIn: 168
                }
                done(null, { responseCode: responseCodes.OK, result: myResponse, message: "Successfully Created" });
                
                return
            }
        })

    }
    catch (error) {

    }

}



const validatePhone = async mobile => {
    let user = await User.findOne({ mobile });
    return user ? false : true;
    };



const list = async (req, res, done) => {
    let result = await User.find({ role:config.role.patient.title}, config.role.patient.fields);
    if(result){
        done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully fetch data." });
    }else{
        done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Not found any patient." });
    }
    // Query.Find('User', {"role":config.role.patient.title}, (error, result) => {
    //     if (error) {
    //         done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

    //     }
    //     else {
    //         done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
    //         return
    //     }
    // })
}

const delete_user = async (req, res, done) => {
    Query.Delete('User', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    })
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

    create,  delete_user, image_upload, list
}