'use strict';
const express = require('express');
const router = express.Router();
const job_model_handler = require('../model_handlers/job.model_handler')
const jsonResponse = require('../utils/json-response');

router.post('/create', function (req, res) {
	job_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	job_model_handler.list(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})



router.post('/list-active', function (req, res) {
	job_model_handler.getActive(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})

router.post('/delete', function (req, res) {
	job_model_handler.Delete(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})

router.post('/update', function (req, res) {
	job_model_handler.Update(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})

module.exports = router;