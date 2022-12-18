const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

db.connect( err => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected!');
});

const app = express();

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('Database created!');
    });
});

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name varchar(250), designation varchar(50), PRIMARY KEY(id))';
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('Table created!');
    });
});

app.get('/insert', (req, res) => {
    let data = {name: 'Emp1', designation: 'Des1'};
    let sql = "INSERT INTO employee SET ?"
    db.query(sql, data, err => {
        if(err) {
            throw err;
        }
        res.send('Record Inserted!');
    });
});

app.get('/select', (req, res) => {
    let sql = "SELECT * FROM employee";
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err;
        }
        console.log(results);
        res.send("Fetch completed!");
    });
});

app.get('/update', (req, res) => {
    let sql = "update employee set name = 'newName' where id = 1";
    let query = db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send("Record updated!");
    });
});

app.get('/delete', (req, res) => {
    let sql = "delete from employee where id = 1";
    let query = db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send("Record updated!");
    });
});

app.listen(3000, () => {
    console.log("   _____                            _        ____               _____ _      _     _     ");
    console.log("  / ____|                          (_)      / __ \\         _   / ____(_)    (_)   | |    ");
    console.log(" | (___   ___ _ ____   _____ _ __   _ ___  | |  | |_ __   (_) | |  __ _ _ __ _ ___| |__  ");
    console.log("  \\___ \\ / _ \\ \'__\\ \\ / / _ \\ \'__| | / __| | |  | | \'_ \\      | | |_ | | \'__| / __| \'_ \\ ");
    console.log("  ____) |  __/ |   \\ V /  __/ |    | \\__ \\ | |__| | | | |  _  | |__| | | |  | \\__ \\ | | |");
    console.log(" |_____/ \\___|_|    \\_/ \\___|_|    |_|___/  \\____/|_| |_| (_)  \\_____|_|_|  |_|___/_| |_|");
    console.log("                                                                                         ");
    console.log("                                                                                         ");
});