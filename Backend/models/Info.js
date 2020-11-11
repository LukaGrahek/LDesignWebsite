// info.js
// Defines the schema/format of the objects which will be saved to the database.

const mongoose = require('mongoose'); //Imports the mongoose library which will be used for defining the schema

const ContactInfoSchema = mongoose.Schema({ // Defines the schema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    message: {
        type: String,
        default: 'No message'
    },

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Ongoing"
    }
});

module.exports = mongoose.model('Info', ContactInfoSchema); //exports the schema