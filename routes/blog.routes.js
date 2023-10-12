'use strict';
const express = require('express');
const router = express.Router();
const user_model_handler = require('../model_handlers/blog.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');

router.post('/create', function (req, res) { 	
	user_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/list', function (req, res) {
	user_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});
router.post('/update', function (req, res) {
	user_model_handler.update(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/delete', function (req, res) {
	user_model_handler.Delete(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

module.exports = router;