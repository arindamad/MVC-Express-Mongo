'use strict';
const express = require('express');
const router = express.Router();
const product_model_handler = require('../model_handlers/product.model_handler')
const jsonResponse = require('../utils/json-response');
const multer = require('multer');

const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
      destination: function(req, file, cb){
          cb(null, 'uploads/product')
      },
      filename: function (req, file, cb) {
          const extension = path.extname(file.originalname);
          cb(null, file.fieldname + '-' + Date.now() + extension);
      },
      
  })
});

router.post('/create', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'photo_gallery', maxCount: 5 },
  { name: 'video', maxCount: 1 },
]), function (req, res) {
	// Check if the 'photo' field is uploaded
	let photoPath = null;
	if (req.files['photo'] && req.files['photo'].length > 0) {
		photoPath = req.files['photo'][0].destination + "/" + req.files['photo'][0].filename;
	}
	let photoGalleryPaths = [];
	if (req.files['photo_gallery'] && req.files['photo_gallery'].length > 0) {
		photoGalleryPaths = req.files['photo_gallery'].map(i => i.destination + "/" + i.filename);
	}
	let videoPaths = [];
	if (req.files['video'] && req.files['video'].length > 0) {
		videoPaths = req.files['video'].map(i => i.destination + "/" + i.filename);
	}
	const obj = {
	photo: photoPath,
	photo_gallery: photoGalleryPaths,
	video: videoPaths,
	...req.body
	};

	product_model_handler.create(obj, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	product_model_handler.list(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


router.post('/image-upload', function (req, res) {
	booking_model_handler.image_upload(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


module.exports = router;