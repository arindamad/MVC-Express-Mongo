'use strict';

const AWS = require('aws-sdk');
// const config = require('../config');

const config = require('../config/config.json')
require('dotenv').config();

module.exports = {
    s3: function() {
    	AWS.config.update({
    		accessKeyId: config[process.env.NODE_ENV].AWS_KEY_ID,
    		secretAccessKey: config[process.env.NODE_ENV].AWS_SECRET_KEY,
    		region: config[process.env.NODE_ENV].AWS_REGION
		});
        return new AWS.S3();
    },
    sqs: function() {
        return new AWS.SQS();
    }
};
