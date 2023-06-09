'use strict';
const express = require('express');
const router = express.Router();
const user_model_handler = require('../model_handlers/doctor.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');


router.post('/login', function (req, res) {
	user_model_handler.login(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

module.exports = router;