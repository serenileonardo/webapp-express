const express = require('express');
const mysql = require("mysql2");
const movieController = require("./controllers/movieController");

const app = express();
const port = 3000;

app.get("/movies", movieController.index);
app.get("/movies/:id", movieController.show);


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
    database: "webapp_express"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connesso al DB");
});
