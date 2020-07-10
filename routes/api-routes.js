// require our models
var db = require("../models");

// routes
module.exports = function (app) {
    // @route:  GET /api
    // @desc:   Return all dog profiles
    app.get("/api", function (req, res) {
        db.Dog.findAll({})
            .then(function (result) {
                res.json(result)
            });
    });

    // @route:  POST /api
    // @desc:   Create a new dog profile
    app.post("/api", function (req, res) {
        // destructure request
        // var image = req.body.image;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var breed = req.body.breed;
        var gender = req.body.gender;
        var age = req.body.age;
        var fixed = req.body.fixed;
        // var location = req.body.location;
        var interests = req.body.interests;

        // create payload
        var payload = {
            // image: image,
            first_name: first_name,
            last_name: last_name,
            breed: breed,
            gender: gender,
            age: age,
            fixed: fixed,
            // location: location,
            interests: interests
        }

        db.Dog.create(payload)
            .then(function (result) {
                res.json(result)
            });
    });
};