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
  const obj = {
    photo: req.files['photo'],
    photo_gallery: req.files['photo_gallery'],
    video:req.files['video'],
    ...req.body
  } 
  // console.log(obj)
  product_model_handler.create(obj, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});

});



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