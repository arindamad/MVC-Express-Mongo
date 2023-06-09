'use strict';


const express = require('express');
const router = express.Router();
const admin_model_handler = require('../model_handlers/admin.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');


router.get('/test', function (req, res) {
	const data = { message: "Server is working." };
	jsonResponse(res, 200, false, data, "Server is working.");
});

router.post('/create', function (req, res) {
	admin_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/login', function (req, res) {
	admin_model_handler.login(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/list', function (req, res) {

	admin_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

//----------list all users----------------//
router.post('/list-users', function (req, res) {

	admin_model_handler.list_users(req.body, res, function (error, result) {
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