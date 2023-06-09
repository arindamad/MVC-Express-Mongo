'use strict';
const express = require('express');
const router = express.Router();
const user_model_handler = require('../model_handlers/doctor.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');
router.post('/create', function (req, res) {
	user_model_handler.create(req.body, res, "doctor", function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/list', function (req, res) {
	user_model_handler.list(req.body, res, function (error, result) {
		console.log(req.body);
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/listbyclinic', function (req, res) {
	user_model_handler.listbyclinic(req.body, res, function (error, result) {
		console.log(req.body);
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

//----------list all users----------------//
router.post('/search', function (req, res) {
	user_model_handler.search(req.body, res, function (error, result) {
		if (error) {
			
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

//----------list all users----------------//
router.post('/filter', function (req, res) {
	user_model_handler.filter(req.body, res, function (error, result) {
		if (error) {
			
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/rest-password', function (req, res) {
	user_model_handler.restPassword(req.body, res, function (error, result) {
		if (error) {			
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/image-upload', function (req, res) {
	admin_model_handler.image_upload(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


module.exports = router;