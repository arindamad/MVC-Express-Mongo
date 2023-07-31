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



const validatePhone = async mobile => {
let user = await User.findOne({ mobile });
return user ? false : true;
};






const restPassword = async (req, res, done) => {
    if(!req.new_password){
        done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Please enter new password." }, null);
        return;
    }
    if(!req.password){
        done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Please enter password." }, null);
        return;
    }

    Query.FindOne('User', {_id: req._id, role: config.role.doctor.title }, async (error, result)  => {
        if (error) {
            done({ responseCode: responseCodes.Invalid, result: [], message: "Invalid try." }, null);

        }

        const isMatch = await comparePassword(req.password,  result.password);
       
       const hashedPassword = await bcrypt.hash(req.new_password, 12);
    //    console.log(req._id)

        if(!isMatch){
           // Update the user's document in the database with the new hashed password
            User.findByIdAndUpdate(req._id, { password: hashedPassword, updated_at: new Date() }, (err, updatedUser) => {
                // console.log(err, updatedUser)
                if (err) {                
                    done({ responseCode: responseCodes.Invalid, result: [], message: "Unable to update." }, null);

                } else {
                // handle success
                done(null, { responseCode: responseCodes.OK, result: updatedUser, message: "Successfully password updated." });

                }
            });
        }
        
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


const list = async (req, res, done) => {
    try {                 
        Query.Find('Product', {}, (error, result) => {             
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Unable to fetch data." }, null);
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

const listbyclinic = async (req, res, done) => {
    const result = await Slot.find({})
    .populate({
        path: 'doctor',
        select: 'first_name last_name doctor_specialization photo mobile dob doctor_degree registration_no uid bio',
        model: 'User'
      })
  .populate({ 
    path: 'clinic',
    select: 'clinic_name address city state country lat long',
    model: 'User'
  })
  .select('first_name last_name doctor_degree doctor_certificate_img doctor_specialization registration_no est_date')
  .lean();

  let doctors = result.map(e=>{
    if(!e.doctor){
        return false;
    }
    if(!e.clinic){
        return false;
    }
    return {
        _id: e.doctor._id,
        first_name: e.doctor.first_name,
        last_name: e.doctor.last_name,
        doctor_specialization: e.doctor.doctor_specialization,
        mobile: e.doctor.mobile,
        dob: e.doctor.dob,
        doctor_degree: e.doctor.doctor_degree,
        registration_no: e.doctor.registration_no,
        uid: e.doctor.uid,
        bio: e.doctor.bio,             
        clinic: e.clinic,       

    }
    
    
  })
    
    if(doctors){
        done(null, { responseCode: responseCodes.OK, result: doctors, message: doctors.length +" doctor(s) found" });
    }else{
        done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });
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
    // let ObjectId = mongoose.Types.ObjectId;
    // if(ObjectId.isValid(req.filter_val)){
        
    // }else{
    //     done({ responseCode: responseCodes.Invalid, result: err, message: "Object Id is not valid."}, null);
    //     return;
    // }
    

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
    create,  search, image_upload, list, restPassword, listbyclinic, filter
}