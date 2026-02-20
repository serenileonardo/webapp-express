const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webapp_express'
});

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione:', err);
        return;
    }
    console.log('Connesso al database!');
});

module.exports = connection;