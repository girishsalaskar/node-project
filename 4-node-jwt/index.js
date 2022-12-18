const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const secreteKey = 'secreteKey';
const user = {
	id: 1,
	name: 'John',
	email: 'sa.dwaynejohnson@gmail.com'
};

app.get('/api', (req, res) => {
	res.json({
		message: "Welcome to the API"
	});
});

const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers['authentication'];
	if (typeof bearerHeader != 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		jwt.verify(bearerToken, secreteKey, (err, authData) => {
			if (err) {
				res.sendStatus(403);
			} else {
				req.token = bearerToken;
				req.authData = authData;
				next();
			}
		});
	} else {
		res.sendStatus(403);
	}
}

const verifyLogin = (req, res, next) => {
	const token = req.token;
	const authData = req.authData;
	const client = authData.user;
	if (user.id === client.id && user.email === client.email && user.name === client.name) {
		next();
	} else {
		res.sendStatus(403);
	}
}

app.post('/api/posts', verifyToken, verifyLogin, (req, res) => {
	res.json({
		message: "Posted!",
		token: req.token,
		authData: req.authData
	});
});

app.post('/api/login', (req, res) => {
	jwt.sign({ user: user }, secreteKey, (err, token) => {
		res.json({ token });
	})
});

app.listen(3000, (req, res) => {


console.log('       ______                                  _                     ');
console.log('      / _____)                                (_)                    ');
console.log('     ( (____  _____  ____ _   _ _____  ____    _  ___     ___  ____  ');
console.log('      \\____ \\| ___ |/ ___) | | | ___ |/ ___)  | |/___)   / _ \\|  _ \\ ');
console.log('      _____) ) ____| |    \\ V /| ____| |      | |___ |  | |_| | | | |');
console.log('     (______/|_____)_|     \\_/ |_____)_|      |_(___/    \\___/|_| |_|');
console.log('                                                                     ');


});