const MySqli = require("mysqli");

let conn = new MySqli({
    host: 'localhost',
    port: 3306,
    user: 'root',
    pass: '',
    db: 'scrum_tracker_db'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};