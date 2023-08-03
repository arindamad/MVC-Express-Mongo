'use strict';
const express = require('express');
const router = express.Router();
const image_model_handler = require('../model_handlers/image.model_handler')
const jsonResponse = require('../utils/json-response');
const multer = require('multer');

const path = require('path');
const responseCodes = require('../utils/response-codes');

const upload = multer({
  storage: multer.diskStorage({
      destination: function(req, file, cb){
			// console.log(req);
          cb(null, 'uploads/product')
      },
      filename: function (req, file, cb) {
          const extension = path.extname(file.originalname);
          cb(null, file.fieldname + '-' + Date.now() + extension);
      },      
  })
});

router.post('/add', upload.fields([
  { name: 'image', maxCount: 1 }
]), function (req, res) {
	// Check if the 'photo' field is uploaded
	const obj ={
		...req.body
	};
	if (req.files['image'] && req.files['image'].length > 0) {
		obj.image = req.files['image'][0].destination + "/" + req.files['image'][0].filename;
		obj.alt_text =  req.files['image'][0].originalname;
		obj.title =  req.files['image'][0].originalname;
		obj.type = req.files['image'][0].mimetype;
		obj.size = req.files['image'][0].mimetype;
	}else{
		obj.image=null;
		jsonResponse(res, responseCodes.ResourceNotFound, true, [], "You have to attached file.");
		return;
	}
	
	// console.log(obj)

	image_model_handler.create(obj, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	image_model_handler.list(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


router.post('/image-upload', function (req, res) {
	image_model_handler.image_upload(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


module.exports = router;