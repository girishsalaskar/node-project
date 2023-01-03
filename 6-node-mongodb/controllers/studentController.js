const express = require('express');
const mongoose = require('mongoose');
const Student = mongoose.model('student');

var router = express.Router();

insertRecord = (req, res) => {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((err, doc) => {
        if(err) {
            console.error(err); 
        }
        res.redirect('student/list');
    });
}

updateRecord = (req, res) => {
    Student.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(err) {
            console.error(err);
        }
        res.redirect('student/list');
    });
}

router.get('/', (req, res) => {
    res.render('student/addOrEdit', {
        viewTitle: 'Insert student'
    });
});

router.post('/', (req, res) => {
    if(req.body._id === '') {
        insertRecord(req, res);
    } else {
        updateRecord(req, res);
    }
});

router.get('/list', (req, res) => {
    Student.find((err, doc) => {
        let list;
        if(!err) {
            list = doc;
        } else {
            console.error(err);
        }
        res.render('student/list', {list: list});   
    });
});

router.get('/:id', (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if(!err) {
            res.render('student/addOrEdit', {viewTitle: 'Update Student', student: doc});
            console.log(doc);
        } else {
            console.error(err);
        }
    });
});

router.get('delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) {
            console.error(err);
        }
        res.redirect('student/list');
    });
});

module.exports = router;