const express = require('express');
const path = require('path');
const handleBars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', exphbs({
//     handlebars: allowInsecurePrototypeAccess(handleBars),
//     extname: 'hbs',
//     defaultlayout: 'MainLayout',
//     layoutsDir: __dirname + '/views/layouts/'
// }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Welcome to node-mongodb demo. Go to /student/list to get all list');
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