'use strict';
const express = require('express');
const router = express.Router();
const product_model_handler = require('../model_handlers/product.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Specify a unique filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the Multer instance
const upload = multer({ storage: storage }).single('photo');

router.post('/create', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // Handle any multer-related errors
      console.error(err);
      return;
    }

    // Access the uploaded file from req.file
    console.log('Uploaded file:', req.file);

    // Access other form data from req.body
    console.log('Other form data:', req.body);

    product_model_handler.create(req, res, function (error, result) {
      if (error) {
        jsonResponse(res, error.responseCode, true, [], error.message);
        return;
      }
      jsonResponse(res, result.responseCode, false, result.result, result.message);
    });
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