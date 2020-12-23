//Mongoose Schema (Channel class)
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var meetSchema = new Schema({
    date: { type: Date, required: true },
    temp: { type: Number, required: true },
    guests: Schema.Types.Mixed
});

//Export the schema
module.exports = mongoose.model('Meet', meetSchema);