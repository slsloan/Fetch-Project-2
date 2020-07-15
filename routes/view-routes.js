// routes
module.exports = function (app) {
    // @route:  GET /
    // @desc:   Render index template
    app.get("/", function (req, res) {
        res.render("index");
    });

    // @route:  GET /dogs
    // @desc:   Return dogs template
    app.get("/dogs", function (req, res) {
        res.render("dogs");
    });
};
