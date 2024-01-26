module.exports = function (sequelize, DataTypes) {
    const Track = sequelize.define("Track", {
        trackid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        albumid: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        mediatypeid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genreid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        composer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        milliseconds: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        bytes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        unitprice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },

        freezeTableName: true,
        timestamps: false,
    });

    Track.associate = function(models) {
        Track.hasOne(models.Genre, {foreignKey: 'genreid'});
    }

    return Track;
};
