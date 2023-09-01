'use strict';
const express = require('express');
const router = express.Router();
const page_model_handler = require('../model_handlers/cms.model_handler')
const jsonResponse = require('../utils/json-response');

router.post('/create', function (req, res) {
	page_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/create-many', function (req, res) {
	page_model_handler.createMany(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});

router.post('/list', function (req, res) {
	page_model_handler.list(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})


router.post('/image-upload', function (req, res) {
	page_model_handler.image_upload(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})

router.post('/list-active', function (req, res) {
	page_model_handler.getProducts(req, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
});
router.post('/delete', function (req, res) {
	page_model_handler.Delete(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
	});
})

module.exports = router;