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


// funzione per lo store della review
exports.addReview = (req, res) => {

    // id del film dall'URL
    const id = req.params.id;

    // dati della recensione dal body
    const { name, vote, text } = req.body;

    // query SQL
    const sql = `INSERT INTO reviews (movie_id, text, name, vote) VALUES (?, ?, ?, ?)`;

    // esegue la query
    db.query(sql, [id, text, name, vote], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.status(201).json({
            message: 'review added',
            id: results.insertId
        });
    });
};