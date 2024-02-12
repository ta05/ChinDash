const Genre = (sequelize, DataTypes) => {
    const GenreModel = sequelize.define("Genre", {
        GenreId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    GenreModel.associate = function(models) {
        GenreModel.belongsTo(models.Track, {as: 'track', sourceKey: 'GenreId', foreignKey: 'GenreId'});
    }

    return GenreModel;
};

export default Genre;
