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

//exports.addReview = (req, res) => {
// console.log("addReview called");
//  const id = req.params.id;
//  console.log("Movie ID:", id);
//  console.log(req.body);
//   res.json({ message: `Recensione aggiunta per il film con ID ${id}` });
//};

// funzione per lo store della review
exports.addReview = (req, res) => {

    // recuperiamo id da param dinamico
    const id = req.params.id;

    // recuperiamo le info dal body della req
    const { name, vote, text } = req.body;

    // settiamo Sql di richiesta al DB
    const sql = 'INSERT INTO reviews (text, name, vote) VALUES (?, ?, ?)';

    // Eseguiamo la query
    db.query(sql, [text, name, vote], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.status(201);
        res.json({ message: 'Review added', id: results.insertId });
    });
};