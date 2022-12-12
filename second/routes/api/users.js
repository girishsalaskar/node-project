const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let users = require('../../Users');

router.get('/', (req, res)=>{
    res.json(users);
});

router.get('/:id', (req, res)=>{
    const found = users.some( user => user.id === parseInt(req.params.id));
    if(found) {
        res.json(users.filter( user => user.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {

    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if(!newUser.name || !newUser.email) {
        res.sendStatus(400);
        return;
    }

    users.push(newUser);
    res.json(users);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = users.some( user => user.id === id );
    if(found) {
        const update = req.body;
        users.forEach( user => {
            if(user.id === id) {
                user.name = update.name ? update.name : user.name;
                user.email = update.email ? update.email : user.email;
                res.json({'msg':'user updated successfully!', users})
            }
        });
    } else {
        res.sendStatus(404);
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = users.some( user => user.id === id );
    if(found) {
        users = users.filter( user => user.id !== id );
        res.json({'msg':'User deleted', users})
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;