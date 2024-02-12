const Track = (sequelize, DataTypes) => {
    const Track = sequelize.define("Track", {
        TrackId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        AlbumId: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        MediaTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GenreId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Composer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        Milliseconds: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        Bytes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        UnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    Track.associate = function(models) {
        Track.hasOne(models.Genre, {as: 'genre', sourceKey: 'GenreId', foreignKey: 'GenreId'});
        Track.belongsTo(models.InvoiceLine, {as: 'invoiceline', sourceKey: 'TrackId', foreignKey: 'TrackId'});
    }

    return Track;
};

export default Track;