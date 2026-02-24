const express = require('express');
const mysql = require("mysql2");
const movieController = require("./controllers/movieController");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/movies", movieController.index);
app.get("/movies/:id", movieController.show);


app.get('/', (req, res) => {
    res.send('Server OK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

