const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const Slot = require("../models/slot.model");



const create = async (req, res, done) => {

    const originalDate = new Date(req.start_time);
    const newDate = new Date(originalDate.getTime() + 30 * 60000);
    req.end_time = newDate;

    const existingSlot = await Slot.findOne({
        doctor: req.doctor,
        start_time: {
          $lt: newDate
        },
        end_time: {
          $gt: req.start_time
        },
        status: 1
      });
      if (existingSlot) {
        done({ responseCode: responseCodes.BadRequest, result: [], message: "Doctor already has a slot during this time" }, null);
        return;
      }
  


    try {        
        Query.Create('Slot', req, (error, result) => {
            if (error) {
                done({ responseCode: responseCodes.Unauthorized, result: [], message: "Error" }, null);
            }
            else {
                done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });

                return
            }
        })
    }
    catch (error) {

    }

}






const list = async (req, res, done) => {
    
   let result = await Slot.find().populate("doctor");
   if(result){
        done(null, { responseCode: responseCodes.OK, result: result, message: "Success" });

   }else{
    done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Error" });

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

    create,  list_users, list
}