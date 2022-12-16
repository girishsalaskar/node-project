const express = require('express');

const app = express();
const port = 3000;
let movies = [
    {
        id:'1',
        title:'Inception',
        director:'Christopher',
        release_date:'2010-01-16'
    },
    {
        id:'2',
        title:'The Irishman',
        director:'Marlin',
        release_date:'2019-01-16'
    }
];

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/movie', (req, res) => {
    res.json(movies);
});

app.post('/movie', (req, res) => {
    const movie = req.body;
    movies.push(movie);
    res.json(movies);
});

app.get('/movie/:id', (req, res) => {
    const id = req.params.id;
    const found = movies.filter( movie => movie.id === id );
    if(found && found.length>0) {
        res.json(found);
    } else {
        res.status(404).send('Movie not found!');
    }
});

app.delete('/movie/:id', (req, res) => {
    const id = req.params.id;
    movies = movies.filter( movie => {
        if(movie.id !== id) {
            return true
        };
        return false;
    } );

    res.json(movies);
});

app.listen(3000, ()=>{
    console.log(`Server running on ${port} port`);
});