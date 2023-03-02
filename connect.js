// connecting and creating database
const sqlite3 = require('sqlite3');
const express = require("express");
var 
let db = new sqlite3.Database(':memory:', err => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Connected to database.')
});




// closing database
db.close((err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Closing connection to the database.')
})
