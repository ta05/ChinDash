const Track = (sequelize, DataTypes) => {
    const Track = sequelize.define("Track", {
        TrackId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        AlbumId: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        MediaTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        GenreId: {
            type: DataTypes.INTEGER,
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
        Track.hasOne(models.Genre, {foreignKey: 'GenreId'});
        Track.belongsTo(models.InvoiceLine, {foreignKey: 'TrackId'});
    }

    return Track;
};

export default Track;