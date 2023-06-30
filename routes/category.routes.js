'use strict';


const express = require('express');
const router = express.Router();
const category_model_handler = require('../model_handlers/category_handler')


const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');

router.post('/create', function (req, res) {
	category_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	category_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/delete', function (req, res) {
	category_model_handler.delete_user(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/update', function (req, res) {
	category_model_handler.update(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/sub-category/create', function (req, res) {
	category_model_handler.subCategoryCreate(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

//----------list all users----------------//
router.post('/list-users', function (req, res) {
	category_model_handler.list_users(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/list-users', function (req, res) {

	category_model_handler.list_users(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/image-upload', function (req, res) {
	category_model_handler.image_upload(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


module.exports = router;