module.exports = function (sequelize, DataTypes) {
    const Invoice = sequelize.define("Invoice", {
        InvoiceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        CustomerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        InvoiceDate: {
            type: DataTypes.DATE,
        },
        BillingAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BillingCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BillingState: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BillingCountry: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BillingPostalCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Total: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },

        freezeTableName: true,
        timestamps: false,
    });

    Invoice.associate = function(models) {
        Invoice.hasOne(models.InvoiceLine,{foreignKey: 'InvoiceId'});
    }

    return Invoice;
};
