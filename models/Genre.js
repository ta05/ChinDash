module.exports = function (sequelize, DataTypes) {
    const Genre = sequelize.define("Genre", {
        genreid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING
        },
        freezeTableName: true,
        timestamps: false,
    });

    return Genre;
};
