// import dependencies
var path = require("path");

// routes
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });
};