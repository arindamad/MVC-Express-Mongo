const Query = require("../utils/query-creator");
const responseCodes = require("../utils/response-codes");
const S3Handler = require("../utils/s3-handler");
const s3Handler = new S3Handler();
const config = require("../config/config.json");
require("dotenv").config();


const create = async (req, res, done) => {
    try { 
        if (!req.brand_category_name) {
            done(null, {
                responseCode: responseCodes.Conflict,
                result: [],
                message: "Please enter Brand Name",
            });
            return;
        }

        Query.Create('BrandCategory', req, (error, result) => {
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
    Query.Find("BrandCategory", {}, (error, result) => {
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
    Query.Delete('BrandCategory', req, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });

        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });    
};

module.exports = {
    create,   
    list, 
    Delete  
};
