module.exports = function (sequelize, DataTypes) {
        var Dog = sequelize.define("Dog", {
                image: DataTypes.STRING,
                first_name: DataTypes.STRING,
                last_name: DataTypes.STRING,
                breed: DataTypes.STRING,
                gender: DataTypes.STRING,
                age: DataTypes.STRING,
                fixed: DataTypes.BOOLEAN,
                lat: DataTypes.STRING,
                long: DataTypes.STRING,
                interests: DataTypes.TEXT
        });
        return Dog;
};
