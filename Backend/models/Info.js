const mongoose = require('mongoose');

const ContactInfoSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Info', ContactInfoSchema)