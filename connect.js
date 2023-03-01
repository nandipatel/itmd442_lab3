// connecting and creating database
const sqlite3 = require('sqlite3').verbose();
let d_base = new sqlite3.Database(':memory:', err => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Connected to database.')
});

// closing database
d_base.close((err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Closing connection to the database.')
})