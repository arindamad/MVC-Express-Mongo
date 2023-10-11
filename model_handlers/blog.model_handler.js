const Query = require("../utils/query-creator");
// const errors = require('../utils/dz-errors');
const responseCodes = require('../utils/response-codes');
const S3Handler = require('../utils/s3-handler');
const s3Handler = new S3Handler();
const config = require('../config/config.json')
require('dotenv').config();
const crypto = require('crypto');
const Blog = require("../models/blog.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const create = async (req, res,  done) => {
    try {     
        const { title } = req;
        generateUniqueSlug(title, async (uniqueSlug) => {
            req.slug = uniqueSlug;
            try {
                Query.Create('Blog', req, (error, result) => {
                    if(error){
                        done({ responseCode: responseCodes.Unauthorized, result: {error}, message: "Error" }, null);
                        return
                    }
                    done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully created blog." });
                });           
            } catch (error) {
                done({ responseCode: responseCodes.Unauthorized, result: {error}, message: "Error" }, null);
            }
          });
      
        
    }
    catch (error) {
        console.log(error);
        done({ responseCode: responseCodes.Unauthorized, result: {error}, message: "Error" }, null);
    }
}


function generateUniqueSlug(title, callback) {
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

    function checkUniqueSlug(newSlug, counter) {
      Blog.findOne({ slug: newSlug }, (err, existingBlog) => {
        if (!existingBlog) {
          callback(newSlug);
        } else {
          counter++;
          const incrementedSlug = `${slug}-${counter}`;
          checkUniqueSlug(incrementedSlug, counter);
        }
      });
    }

    checkUniqueSlug(slug, 0);
  }
  


const update = async (req, res, done) => {
    Query.UpdateOne('Blog', req, {_id:req._id}, (error, result) => {
        if(error){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Not found any patient." });
            return;
        }
        done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully fetch data." });
    });
}

const list = async (req, res, done) => {
    Query.Find('Blog', req, (error, result) => {
        if(error){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Not found any patient." });
            return;
        }
        done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully fetch data." });
    });
}

const Delete = async (req, res, done) => { 
    Query.Delete('Blog', req, (error, result) => {
        if (error){
            done(null, { responseCode: responseCodes.Unauthorized, result: [], message: "Unable to delete data." });
        } 
        else {
            done(null, { responseCode: responseCodes.OK, result: result, message: "Successfully deleted data." });
            return
        }
    });  
}

module.exports = {

    create,  Delete,  list, update
}