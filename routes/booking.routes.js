'use strict';


const express = require('express');
const router = express.Router();
const booking_model_handler = require('../model_handlers/booking.model_handler')
const jsonResponse = require('../utils/json-response');
const responseCodes = require('../utils/response-codes');

router.post('/create', function (req, res) {
	booking_model_handler.create(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});

router.post('/available', function (req, res) {
	booking_model_handler.availability(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
		return;
	});
});

router.post('/slots-of-date', function (req, res) {
	booking_model_handler.getSlotByDate(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
		return;
	});
});

router.post('/history/patient', function (req, res) {
	booking_model_handler.historyByPatient(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);
		return;
	});
});



//----------list all users----------------//
router.post('/list-users', function (req, res) {

	booking_model_handler.list_users(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.responseCode, true, [], error.message);
			return;
		} 
		jsonResponse(res, result.responseCode, false, result.result, result.message);

	});
});


router.post('/list-users', function (req, res) {

	booking_model_handler.list_users(req.body, res, function (error, result) {
		if (error) {
			jsonResponse(res, error.code, false, [], "Somthing gone wrong");
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