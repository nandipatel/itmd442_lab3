// connecting and creating database
const sqlite3 = require('sqlite3');
const express = require("express");
var con = express();

const HTTP_PORT = 3500
con.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

const db = new sqlite3.Database('./database/contacts.db', (err) => {
    if(err) {
        return console.error(err.message);
    } else {
        db.run('CREATE TABLE IF NOT EXISTS contacts (\
            id INTEGER PRIMARY KEY,\
            f_name NVARCHAR(500),\
            l_name NVARCHAR(500) "",\
            email NVARCHAR(500) "",\
            note NVARCHAR(500) "",\
            date_time DATETIME\
          );')
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
