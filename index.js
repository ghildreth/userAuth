const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(cookieParser());
// parse application/x-www/-form-urlencoded
app.use(bodyParser.urlencoded( { extended: false } ));

app.set ("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('weclome');
});

app.get("/treasure", (req, res) => {

});