const mongoose = require('mongoose');
const { functions } = require('underscore');
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
    Populate: async (Dbconnection, credentials, populate, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.find(credentials).populate(populate).exec(function (error, data) {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, data);
        })
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
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.deleteOne(credentials, function(error, data){
            if (error) {
                callback(error, null); return;
            }
            callback(null, data);
        })
    },

    UpdateOne : async (Dbconnection, setdata, condition, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        try {
            const result = await dbCollection.updateOne(condition, { $set: setdata });
            callback(null, result);
        } catch (error) {
            callback(error, null);
        } 
    },
    FindOneAndUpdate : async (Dbconnection, setdata, condition, callback) => {
        const dbCollection = mongoose.model(Dbconnection);
        try {
            const result = await dbCollection.findOneAndUpdate(condition, { $set: setdata }, {
                upsert: true, // Set upsert to true to insert if not found
                new: true, // Return the updated document
              });
            callback(null, result);
        } catch (error) {
            callback(error, null);
        }
    },

    UpdateMany:async(Dbconnection,setdata,condition,callback)=>{        
        const dbCollection = mongoose.model(Dbconnection);
        dbCollection.updateMany(
            condition,
            {
                $set: {
                    "section_prop.$[]": "new_section_prop_value",
                    "section_name.$[]": "new_section_name_value",
                    "section_value.$[]": "new_section_value"
                 }

            },
            function (error, data) {
                if (error) {
                    console.log(error)
                    callback(error, null); return;
                }
                callback(null, data);
                console.log(data)
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


