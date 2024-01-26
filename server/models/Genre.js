const Genre = (sequelize, DataTypes) => {
    const GenreModel = sequelize.define("Genre", {
        GenreId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        GenreModel.belongsTo(models.Track, {foreignKey: 'GenreId'});
    }

    return GenreModel;
};

export default Genre;
