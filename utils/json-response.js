'use strict';

/*
 * Standardizes json responses from the server to client
 *
 * @param {Object} Express response object
 * @param {Int} Response status code
 * @param {Object} Any Error thrown that should be propagated to client
 * @param {Object, Array, Number, String} Any object that should be sent that can be serialized
 */
module.exports = async(res, status, error, payload,message) =>{
	res.status(status).send(JSON.stringify({
		error: error,
		data: payload,
		message:message,
		status: status.toString()
	}));

	return;
};
