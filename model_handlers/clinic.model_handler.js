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



const create = async (req, res, role, done) => {    

    try {    

        const uniqueId = crypto.randomBytes(3).toString("hex");        
        req.uid=uniqueId.toLocaleUpperCase(); 

        if(!req.clinic_name){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Please add clinic name." });
            return;
        }
        if(!req.clinic_phone){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Please add mobile no." });
            return;
        }
        if(!req.mobile){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Please add mobile no." });
            return;
        }
        if(!req.password){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Please add password." });
            return;
        }
        
        
        
    
         // validate the phone
         let phoneNotRegistered = await validatePhone(req.mobile);
         if (!phoneNotRegistered) {
             done(null, { responseCode: responseCodes.Conflict, result: [], message: "Phone is already registered." });
             return;
         }

         const password = await bcrypt.hash(req.password, 12);
         let obj = {
            ...req,
            role:config.role.clinic.title,
            password
         }
         

         console.log(obj);



        Query.Create('User', obj, (error, result) => {
            
            if (error) {
                done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error"+error });

            }
            else {
                let response = {
                    "clinic_name":result.ClinicName,
                    "est_date":result.est_date,
                    "clinic_phone":result.clinic_phone,
                    "clinic_email":result.clinic_email,
                    "registration_no":result.registration_no,
                    "lat":result.lat,
                    "long":result.long,
                    "zip":result.zip,
                    "address":result.address,
                    "city":result.city,
                    "state":result.state,
                    "country":result.country,    
                    "first_name": result.first_name,
                    "last_name": result.last_name,
                    "mobile": result.mobile,
                    "password": result.password,
                    "email":result.email, 
                    "photo": result.photo,
                    _id: result._id,
                    uid: result.uid,
                }
                done(null, { responseCode: responseCodes.OK, result: response, message: "Successfully Created" });
                return
            }
        })


    }
    catch (error) {

    }

}

/**
 * @DESC Check Role Middleware
 */
const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};
const validatePhone = async mobile => {
let user = await User.findOne({ mobile });
return user ? false : true;
};












const login = async (req, res, done) => {
    Query.Find('User',{mobile: req.mobile}, (error, result) => {
        if (error) {
            done(null, { responseCode: responseCodes.Invalid, result: [], message: "Invalid Request" });

        }
        else { 
            if(result[0] && result[0].password==req.password){
                done(null, {error:false, responseCode: responseCodes.OK, result: result[0], message: "Successfully Logged in" });
            }else if(!result[0]){
                done(null, {error:true, responseCode: responseCodes.Forbidden, result: {}, message: "Invalid Mobile No" });
            }else{
                done(null, {error:true, responseCode: responseCodes.Forbidden, result: {}, message: "Invalid Password" });
            }          
            return
        }
    })
}

const list = async (req, res, done) => {
    let result = await User.find({ role: config.role.clinic.title }, {clinic_name:1,
    est_date:1,
    clinic_phone:1,
    clinic_email:1,
    registration_no:1,
    lat:1,
    long:1,
    zip:1,
    address:1,
    city:1,
    state:1,
    country:1,    
    first_name: 1,
    last_name: 1,
    mobile: 1,
    password: 1,
    email:1, 
    photo: 1,
    _id: 1,
    uid: 1});
    if(result){
        done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
    }else{
        done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });
    }

    // Query.Find('User', req, (error, result) => {
    //     if (error) {
    //         done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

    //     }
    //     else {
    //         done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });

    //         return
    //     }
    // })
}

const list_users = async (req, res, done) => {


    Query.Find('Users', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
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

    create,  list_users, image_upload, list, login
}