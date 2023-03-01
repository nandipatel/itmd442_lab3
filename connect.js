const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connection to an in-memory database has been made.')
});
