module.exports = function (sequelize, DataTypes) {
    const Genre = sequelize.define("Genre", {
        GenreId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING
        },
        freezeTableName: true,
        timestamps: false,
    });

    Genre.associate = function(models) {
        Genre.belongsTo(models.Track, {foreignKey: 'TrackId'});
    }

    return Genre;
};
