const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentdb', {
    useNewUrlParser: true
}, (err) => {
    if(!err) {
        console.log('Connected to db');
    } else {
        console.error('Failed to connect');
        console.error(err);
    }
});

require('./student.model');