const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
module.exports = {
    Find: async (Dbconnection, credentials,  test, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.find(credentials, test, function (error, data) {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, data);
        });
    },
    FindOne: async (Dbconnection, credentials, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.findOne(credentials, function (error, data) {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, data);
        });
    },
    Populate: async (Dbconnection, credentials, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.find(credentials, function (error, data) {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, data);
        }).populate('doctor_id')
    },


    Create: async (Dbconnection, credentials, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.create(credentials, function (error, data) {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, data);
        });
    },

    UpdateAttendance: async (Dbconnection, credentials, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.update(
            { "user_id": ObjectId(credentials.user_id) },
            {
                $push: {
                    attendance: {
                        $each:
                            credentials.attendance
                    }
                }
            },
            function (error, data) {
                if (error) {
                    callback(error, null); return;
                }
                callback(null, data);
            }
        )

    },

    Aggregation: async (Dbconnection, aggregateddata, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.aggregate(aggregateddata, function (error, data) {
            if (error) {
                callback(error, null); return;
            }
            callback(null, data);
        })

    },

    InsertMany: async (Dbconnection, aggregateddata, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.insertMany(aggregateddata, function (error, data) {
            if (error) {
                callback(error, null); return;
            }
            callback(null, data);
        })

    },

    Delete: async (Dbconnection, credentials, callback) => {
        console.log(credentials);
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.deleteOne(credentials, function(error, data){
            if (error) {
                callback(error, null); return;
            }
            callback(null, data);
        })
    },

    Update:async(Dbconnection,setdata,condition,callback)=>{
        const dbCollection = mongoose.model(Dbconnection);

        dbCollection.update(
            condition,
            {
                $set: setdata

            },
            function (error, data) {
                if (error) {
                    callback(error, null); return;
                }
                callback(null, data);
            })
    },

    UpdateSubscription: async (Dbconnection, expirydate, callback) => {

        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.update({
            expiry_date: expirydate,
            status: '1',
            subscription_type: 'New'
        },
            {
                $set: {

                    status: '0',
                    subscription_type: 'Expired'
                }

            },
            function (error, data) {
                if (error) {
                    callback(error, null); return;
                }
                callback(null, data);
            }
        )
    }

}


