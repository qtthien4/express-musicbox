const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db');

//connect db
db.connect();

app.use(express.urlencoded());
app.use(express.json());

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log(__dirname, 'recources/views')

//route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})