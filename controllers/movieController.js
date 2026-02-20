const mysql = require("mysql2");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "webapp_express"
});



exports.index = (req, res) => {

    db.query("SELECT * FROM movies", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Errore database");
        }

        res.json(results);
    });

};



exports.show = (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM movies WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Errore database");
        }

        if (results.length === 0) {
            return res.status(404).send("Film non trovato");
        }

        res.json(results[0]);
    });

};