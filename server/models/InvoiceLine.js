const InvoiceLine = (sequelize, DataTypes) => {
    const InvoiceLine = sequelize.define("InvoiceLine", {
        InvoiceLineId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        InvoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TrackId: {
            type: DataTypes.STRING,
            allowNull: false,
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
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    InvoiceLine.associate = function(models) {
        InvoiceLine.hasOne(models.Track, {as: 'track', sourceKey: 'TrackId', foreignKey: 'TrackId'});
        InvoiceLine.belongsTo(models.Invoice, {as: 'invoice', sourceKey: 'InvoiceId', foreignKey: 'InvoiceId'});
    }

    return InvoiceLine;
};

export default InvoiceLine;