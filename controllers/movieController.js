const db = require("../data/db");



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


exports.addReview = (req, res) => {

    const id = req.params.id;
    const { name, vote, text } = req.body;

    const sql = `INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)`;

    db.query(sql, [id, name, vote, text], (err, results) => {
        if (err) {
            console.error("ERRORE DB:", err);
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Review added", id: results.insertId
        });
    });
};