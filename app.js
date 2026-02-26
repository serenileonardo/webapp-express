const express = require('express');
const mysql = require("mysql2");
const movieController = require("./controllers/movieController");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/movies", movieController.index);
app.get("/movies/:id", movieController.show);
app.post("/movies/:id/reviews", movieController.addReview);

app.get('/', (req, res) => {
    res.send('Server OK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



