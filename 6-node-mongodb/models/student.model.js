const mongoose = require('mongoose');

var studSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    mobile: {
        type: Number,
        required: 'Mobile number is required'
    },
    city: {
        type: String,
        required: 'City is required'
    }
});

mongoose.model('student', studSchema);