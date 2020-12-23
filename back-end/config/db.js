const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'root';
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || '173.17.0.27';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = 'santander-app';

//Connection URL
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

//Connection Settings
const connection_settings = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

mongoose.connect(url, connection_settings, function (result) {
    if (result) {
        console.log(JSON.stringify({ result }))
    }
});

mongoose.set('useCreateIndex', true)

const connection = mongoose.connection;

//Check Error
connection.on('error', function (err) {
    console.log(JSON.stringify({ err }))
});

//Check Disconnected
connection.on('disconnected', function () {
    console.log('MongoDB Disconnected')
});

//Check Open Connection
connection.once('open', function () {
    console.log('MongoDB Connected')
});

//Check Reconnection
connection.on('reconnected', function () {
    console.log('MongoDB Reconnected')
});

module.exports={
    connection
}