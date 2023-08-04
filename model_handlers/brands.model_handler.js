const Query = require("../utils/query-creator");
const responseCodes = require("../utils/response-codes");
const S3Handler = require("../utils/s3-handler");
const s3Handler = new S3Handler();
const config = require("../config/config.json");
require("dotenv").config();
const crypto = require("crypto");
const mongoose = require("mongoose");


const create = async (req, res, done) => {
    try {
        const uniqueId = crypto.randomBytes(3).toString("hex").toLocaleUpperCase(); 
      
        if (!req.brand_name) {
            done(null, {
                responseCode: responseCodes.Conflict,
                result: [],
                message: "Please enter Brand Name",
            });
            return;
        }
        req.short_id = uniqueId;

        Query.Create('Brand', req, (error, result) => {
            if (error) {
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
    Query.Find("Brand", {}, (error, result) => {
        if (error) {
            error(null, {
                responseCode: responseCodes.Unauthorized,
                result: [],
                message: "Error",
            });
        } else {
            done(null, {
                responseCode: responseCodes.OK,
                result: result,
                message: "Successfully Fetched.",
            });

            return;
        }
    });
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
















const image_upload = async (req, res, done) => {
    console.log(req.body._id);
    var ObjectId = require("mongodb").ObjectID;
    let bucketName;
    let fileName;
    let dbName;
    if (req.body.type == "client") {
        bucketName = config[process.env.NODE_ENV].AWS_CLINETS_BUCKET;
        dbName = "Clients";
        Query.Find("Clients", { _id: ObjectId(req.body._id) }, (error, result) => {
            if (error) {
                done(null, {
                    responseCode: responseCodes.Invalid,
                    result: [],
                    message: "Failed: No such client ",
                });
                return;
            } else {
                console.log(result[0].photo);
                fileName = result[0].photo;
            }
        });
    } else {
        bucketName = config[process.env.NODE_ENV].AWS_USERS_BUCKET;
        dbName = "User";
        Query.Find("User", { _id: Object(req.body._id) }, (error, result) => {
            if (error) {
                done(null, {
                    responseCode: responseCodes.Invalid,
                    result: [],
                    message: "Failed: No such user ",
                });
                return;
            } else {
                console.log(result[0].photo);

                fileName = result[0].photo;
            }
        });
    }

    console.log(bucketName);

    let fileType = req.files.photo.name.split(".").pop();
    req.files.photo["file_name"] =
        req.files.photo.name + Date.now() + "." + fileType;

    s3Handler.upload(
        req.files.photo,
        bucketName,
        fileType,
        (error, imageData) => {
            if (error) {
                done(null, {
                    responseCode: responseCodes.Invalid,
                    result: [],
                    message: "Failed: Try again Later",
                });
                return;
            } else {
                if (fileName != null) {
                    s3Handler.deleteFile(fileName, bucketName, (err, data) => {
                        if (err) console.log(err);
                        else {
                            console.log(data);
                        }
                    });
                }
                let finalimagename = getImageNameFromURL(imageData.Location);
                console.log(finalimagename);

                Query.Update(
                    dbName,
                    { photo: finalimagename },
                    { _id: req.body._id },
                    (error, result) => {
                        if (error) {
                            done(null, {
                                responseCode: responseCodes.Unauthorized,
                                result: [],
                                message: "Error",
                            });
                        } else {
                            done(null, {
                                responseCode: responseCodes.OK,
                                result: finalimagename,
                                message: "Success",
                            });

                            return;
                        }
                    }
                );

                // done(null, { responseCode: responseCodes.OK, result: finalimagename, message: "Success" });
                // return
            }
        }
    );
};

function getImageNameFromURL(URL) {
    if (URL) {
        var mainImageUploadURL = URL; //uploadPhoto = AWS return object
        var normalImageUploadURL = mainImageUploadURL.lastIndexOf("/");
        var finalImageURL = mainImageUploadURL.substring(normalImageUploadURL + 1);
        return finalImageURL;
    }
}


module.exports = {
    create,   
    image_upload,
    list, 
    Delete  
};
