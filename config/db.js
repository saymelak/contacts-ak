const mongoose = require ('mongoose');
const config = require ('config');
const db = config.get ('mongoURI');


const connectDB = async () => {

    try {
        await mongoose.connect (db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error (err.message);
        process.exit (1);
    }
    
    
};


module.exports = connectDB;

/*

const fs = require ("fs");
const mongoose = require ('mongoose');
const tunnel = require ('tunnel-ssh');

const config = {
    username: 'root',
    host: '45.61.49.52',
    agent: process.env.SSH_AUTH_SOCK,
    //privateKey:require('fs').readFileSync('/Users/myusername/.ssh/id_rsa'),
    port: 22,
    dstPort: 27017,
    password: 'Y{gyixjovF\\5'
};
//const db = mongoose.connection;

//console.log('before: ', db);

let server = tunnel (config, (error, server) => {
    if (error) {
        console.log ("SSH connection error: " + error);
    }
    mongoose.connect ('mongodb://localhost:27017/hexagon', {useNewUrlParser: true});
    const db = mongoose.connection;
    
    db.on ('error', console.error.bind (console, 'DB connection error:'));
    db.once ('open', async function () {
        console.log ("DB connection successful");
        //console.log('before: ', db);
    });
});

const Production = mongoose.model ('Production',
    new mongoose.Schema ({
        _id: Object,
        fieldset: String,
        name: String,
        parent: Object,
        path: String,
        userId: String,
        lastModified: Date,
        lotDescription: Object,
        trackingID: String
    }),
    'production');     // collection name

exports.getLastModifiedPlant = async () => {
    const pageNumber = 1; // 1, 2, 3, ...
    const pageSize = 10;
    
    return Production.find ({name: "production-plants", fieldset: "lotDescription"}).countDocuments ();
};

exports.getLastModifiedPlant1 = async () => {
    const pageNumber = 1; // 1, 2, 3, ...
    const pageSize = 10;
    
    //let plants = await Production.find({name : "production-plants"}).countDocuments();
    //let plants = await Production.find({"lotDescription.trackingID" : {"value" : trackingID}});
    
    let latest = await Production.findOne ({}, {}, {sort: {'lastModified': -1}}, function (err, post) {
        return post;
        
    });
    //return latest.findOne({});
    try {
        return await latest.lotDescription.trackingID.value;// userId.value;//.find ({name: "production-plants"});
    } catch (e) {
        console.log (e.message)
        
    }
    
};
 */