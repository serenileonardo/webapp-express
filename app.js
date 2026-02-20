const express = require('express');
const mysql = require("mysql2");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Server OK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cinema"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connesso al DB");
});
