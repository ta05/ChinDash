module.exports = function (sequelize, DataTypes) {
    const Track = sequelize.define("Track", {
        trackid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },

        albumid: {

        },
        mediatypeid: {

        },
        genreid: {

        },
        composer: {

        },
        milliseconds: {

        },
        bytes: {

        },
        unitprice: {

        },

        freezeTableName: true,
        timestamps: false,
    });

    return Track;
};
