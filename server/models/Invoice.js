const Invoice = (sequelize, DataTypes) => {
    const Invoice = sequelize.define("Invoice", {
        InvoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        CustomerId: {
            type: DataTypes.STRING,
            defaultValue: "00000000-0000-0000-0000-000000000000"
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
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    Invoice.associate = function(models) {
        Invoice.hasOne(models.InvoiceLine,{as: 'invoiceline', sourceKey: 'InvoiceId', foreignKey: 'InvoiceId'});
    }

    return Invoice;
};

export default Invoice;
