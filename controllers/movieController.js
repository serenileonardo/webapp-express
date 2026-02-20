const posts = require("../data/db");

function index(req, res) {
    res.json(movie);
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const movie = posts.find(post => post.id === id);
    res.json(movie);
};