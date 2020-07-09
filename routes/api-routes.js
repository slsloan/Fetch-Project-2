// require our models
module.exports = function (app) {
    app.get("/api", function (req, res) {
        res.send("some string");
    });
};