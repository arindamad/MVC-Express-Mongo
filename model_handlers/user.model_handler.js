const Query = require("../utils/query-creator");
const responseCodes = require('../utils/response-codes');
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const create = async (req, res,  done) => { 
    try {       
        if(req.email){
            let EmailNotRegistered = await validateEmail(req.email);
            if (!EmailNotRegistered) {
                done({ responseCode: responseCodes.Conflict, result: [], message: "Email is already registered." },null);
                return;
            }
        }
        
        if(!req.password){
            done({ responseCode: responseCodes.Conflict, result: [], message: "Please enter password." },null);
            return;
        }

        // Get the hashed password
        const password = await bcrypt.hash(req.password, 12);
        let obj = {
           ...req,
           role:"team-leader",
           password,
           status:1
        }
       
        Query.Create('User', obj, (error, result)  => { 
            if(error){
                done({ responseCode: responseCodes.InternalServer, result: [], message: "Successfully Created" }, null);
            }else{               
                let response ={
                    first_name:result.first_name,
                    last_name:result.last_name, 
                    email:result.email, 
                    role:result.role,
                    create_at:result.create_at,
                    phone:result.phone
                }
                let token = jwt.sign(response, process.env.JWT_SECRET, { expiresIn: "30 days" });
                response.token = token;

                // const response = {
                //     ...result,
                //     token: token
                // }
                // console.log("Final Response",response)

               
                done(null, { responseCode: responseCodes.OK, result: response, message: "Successfully Created" });
            }
           
        })

    }
    catch (error) {
        console.log(error);
        done({ responseCode: responseCodes.Unauthorized, result: {error}, message: "Error" }, null);
    }

}

const validatePhone = async mobile => {
    let user = await User.findOne({ mobile });
    return user ? false : true;
};
const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};

const login = async (req, res, done) => {
    try{
        if(!req.user){
            done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Please add a Email/Phone." }, null);
            return;
        }
        if(!req.password){
            done({ responseCode: responseCodes.Unauthorized, result: {}, message: "Please enter Password." }, null);
            return;
        }
        Query.FindOne('User', { email:req.email}, async (error, result)  => {
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
    
            const token = jwt.sign({ 
                first_name: result.first_name,
                last_name: result.last_name,
                email: result.email,                   
                role: result.role,
                mobile: result.mobile,
                uid: result.uid,
                _id: result._id,
                status: result.status,
                created_at:result.created_at
             }, config.development.secret, {
                expiresIn: '120h',
              });
              let obj = {
                token,
                first_name: result.first_name,
                last_name: result.last_name,
                email: result.email,                   
                role: result.role,
                mobile: result.mobile,
                uid: result.uid,
                _id: result._id,
                status: result.status,
                created_at:result.created_at
              }
    
             done(null, {responseCode: responseCodes.OK, result: obj, message: "Successfully Login." });
             return;  
        })
    }
    catch(e){
        done({ responseCode: responseCodes.InternalServer, result: {e}, message: "Internal server error." }, null);
    }     
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
    let result = await User.find({ role:config.role.users.title});
    if(result){
        done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully fetch data." });
    }else{
        done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Not found any patient." });
    }   
}

const delete_user = async (req, res, done) => { 
    Query.Find('User', {_id:req._id}, (error, result) => {
        if (error)
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "User not found." });

        else {
            if(result.role!==config.role.users.title){
                done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "You don't have any permission to delete this." });
                return;
            }
            Query.Delete('User', req, (error, result) => {
                if (error)
                    done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });
        
                else {
                    done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
                    return
                }
            });            
            return
        }
    });   
}

module.exports = {

    create,  delete_user,  list, login
}