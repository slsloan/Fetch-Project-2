module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        // image: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        breed: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.STRING,
        fixed: DataTypes.STRING,
        // location: DataTypes.INTEGER,
        interests: DataTypes.TEXT
    });
    return Dog;
};