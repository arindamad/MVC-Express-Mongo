'use strict';
const express = require('express');
const router = express.Router();
const enquire_model_handler = require('../model_handlers/enquire.model_handler')
const jsonResponse = require('../utils/json-response');


router.post('/create', function (req, res) {
	enquire_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	enquire_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/delete', function (req, res) {
	enquire_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		}
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


module.exports = router;