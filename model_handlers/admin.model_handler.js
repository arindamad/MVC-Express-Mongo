const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const User = require("../models/user.model");
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





const create = async (req, res, done) => { 
    try {  
        if(req.admin_creation_key!==config.admin_creation_key){
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Sorry! invalid request." }, null);
            return;
        }
        const uniqueId = crypto.randomBytes(3).toString("hex").toLocaleUpperCase(); 
        if(!req.email){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Email no is required." }, null);
            return;
        }
        // validate the phone
        let emailNotRegistered = await validateEmail(req.email);
        if (!emailNotRegistered) {
            done({ responseCode: responseCodes.Conflict, result: [], message: "Email is already registered." }, null);
            return;
        }
        if(!req.password){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Please enter password." }, null);
            return;
        }

        // Get the hashed password
        const password = await bcrypt.hash(req.password, 12);
        delete req.admin_creation_key;
        let obj = {
            ...req,
            role:config.role.admin.title,
            password,
            uid:uniqueId,
            status:1
         }
        Query.Create('User', obj, (error, result) => {
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);
            }
            else {
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Created Admin." });
                return
            }
        });
    }
    catch (error) {
        console.log(error);
    }

}

const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};

const list = async (req, res, done) => {
    Query.Find('User', req, {"first_name": 1, "last_name":1, "email": 1, "photo": 1, "role": 1, "status": 1, "_id": 1, "created_at": 1, "updated_at": 1}, (error, result) => {
        if (error) {
            done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);

        }
        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
            return
        }
    })
}

const login = async (req, res, done) => {
    if(!req.user){
        done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Please add a Email/Phone." }, null);
        return;
    }
    if(!req.password){
        done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Password not found." }, null);
        return;
    }
    Query.FindOne('User', { $and:[
        {$or: [{ email: req.user }, { phone: req.user }]},
        {role:{$in: [config.role.admin.title]}}
    ]}, async (error, result)  => {
        if (error) {
            done({ responseCode: responseCodes.InternalServer, result: {}, message: "Internal server error." }, null);
            return;
        }
       
        if(!result) {
            done({ responseCode: responseCodes.Unauthorized, result: {}, message: "User not found in Database." }, null);
            return;
        }
        const isMatch = await comparePassword(req.password,  result.password);  
        if(!isMatch){
           return done({responseCode: responseCodes.Unauthorized, result: {}, message: "Invalid Password." }, null);
        }

        const token = jwt.sign({ userId: result._id }, config.development.secret, {
            expiresIn: '120h',
          });
          let obj = {
            token,
            "first_name":result.first_name,
            "last_name": result.last_name,
            "email": result.email,
            "photo": result.photo,
            "role": result.role,
          }

         done(null, {responseCode: responseCodes.OK, result: obj, message: "Successfully Login." });
         return;  
    })
};

const comparePassword = async (oldPassword, newPassword) => {
    try {
      const isMatch = await bcrypt.compare(oldPassword, newPassword);
      return isMatch;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  

const list_users = async (req, res, done) => {
    Query.Find('Users', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
            return
        }
    });
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

    create, login, list_users, image_upload, list
}