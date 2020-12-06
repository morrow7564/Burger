const connection = require("./connection");

// The ORM, that helps convert our data from our requests to a usable query string for MySQL
const orm = {
    selectAll: function(tableInput, cb) {
        const q = "SELECT * FROM ??";
        connection.query(q, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, val, cb) {
        const q = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(q, [tableInput, val], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, val, condition, cb) {
        const q = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(q, [tableInput, val, condition], (err, result) => {
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;