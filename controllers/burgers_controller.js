const express = require("express");
const router = express.Router();

const Burgers = require("../models/burger");

// Get route, gets all data (burgers) and passes that data to the index.handlebars file
router.get("/", (req, res) => {
    Burgers.selectAll(data => {
        res.render("index", {burgers: data});
    });
});

// POST route, takes the data (burger name) from the front end and passed in to our Burger model
router.post("/api/burgers", (req, res) => {
    Burgers.create(req.body.burgerName, (result) => {
        res.json({id: result.insertId});
    });
});

// PUT route, takes the id of the data that was clicked on in the front end to be passed in to our Burger model
router.put("/api/burgers/:id", (req, res) => {
    Burgers.update(req.params.id, () => {
        res.status(200).end();
    });
});


module.exports = router;