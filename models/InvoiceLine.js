module.exports = function (sequelize, DataTypes) {
    const InvoiceLine = sequelize.define("InvoiceLine", {
        InvoiceLineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        InvoiceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TrackId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        UnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        freezeTableName: true,
        timestamps: false,
    });

    InvoiceLine.associate = function(models) {
        InvoiceLine.hasOne(models.Track,{foreignKey: 'TrackId'});
        InvoiceLine.belongsTo(models.Invoice, {foreignKey: 'InvoiceId'});
    }

    return InvoiceLine;
};
