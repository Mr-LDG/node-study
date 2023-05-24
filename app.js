const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;