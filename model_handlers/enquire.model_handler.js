const Query = require("../utils/query-creator");
const responseCodes = require('../utils/response-codes');
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const Enquiry = require("../models/enquiry.model");
const bcrypt = require("bcryptjs");

const ArMail = require("../utils/mailSender")



const create = async (req, res, done) => {  
    try {    
        const uniqueId = crypto.randomBytes(3).toString("hex"); 
        req.enquire_id = uniqueId; 

        ArMail.SendArin(req, (error, result)=>{
            if(error){
                console.log(error)
            }
        });

        Query.Create('Enquiry', req, (error, result) => {            
            if (error) {
                done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error"+error });
            }
            else {               
                done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully Created" });
                return
            }
        });

          
        


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
        Query.Find('Enquiry', req, (error, result) => {            
            if (error) {
                done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error"+error });

            }
            else {               
                done(null, { responseCode: responseCodes.OK, result: result, message: "Total Enquire "+result.lenght });
                return
            }
        })  
    }catch(e){
        done(null, { responseCode: responseCodes.InternalServer, result: [], message: "Internal Server Error." });
    }
    
}





module.exports = {

    create, list
}