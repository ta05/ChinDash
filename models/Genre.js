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

    Genre.associate = function(models) {
        Genre.belongsTo(models.Track, {foreignKey: 'trackid'});
    }

    return Genre;
};
