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
    },

    status: {
        type: String,
        default: "open"
    }
});

module.exports = mongoose.model('Info', ContactInfoSchema)