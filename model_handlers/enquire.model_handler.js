const Query = require("../utils/query-creator");
const responseCodes = require('../utils/response-codes');
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const Enquiry = require("../models/enquiry.model");
const bcrypt = require("bcryptjs");



const create = async (req, res, done) => {    

    try {    
        const uniqueId = crypto.randomBytes(3).toString("hex"); 
        if(!req.product_id){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "You need to add Product Id." });
            return;
        }
        if(!req.user_id){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "You need to add User Id." });
            return;
        }
        req.enquire_id = uniqueId;    
       
        Query.Create('Enquiry', req, (error, result) => {            
            if (error) {
                done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error"+error });

            }
            else {               
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Created" });
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



const list = async (req, res, done) => {
    try{
        let result = await Enquiry.find({}).populate('product_id').populate('user_id').exec();
        // .populate('product_id').exec()
        if(result){
            done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });
        }else{
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });
        }
    }catch(e){
        done(null, { responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." });
    }
    
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




module.exports = {

    create,  list_users,  list
}