import db from "../models/index.js";

export function getAllMonthlyGenreSales(_req, res) {
    db.Invoice.findAll({
        attributes: [
            [db.sequelize.fn('DATE_FORMAT', db.sequelize.col('InvoiceDate'), '%b %Y'), 'YearMonth'],
            [db.sequelize.col("InvoiceLine.Track.Genre.Name"), "Genre"],
            [db.sequelize.fn('SUM', db.sequelize.col('Quantity')), 'UnitsSold'],
        ],
        include: {
            model: db.InvoiceLine,
            attributes: [],
            required: true,
            as: 'invoiceline',
            include: {
                model: db.Track,
                attributes: [],
                as: 'track',
                include: {
                    model: db.Genre,
                    attributes: [],
                    as: 'genre',
                }
            }
        },
        group: ['Genre', 'YearMonth'],
        order: [
            db.sequelize.fn('DATE_FORMAT', db.sequelize.col('InvoiceDate'), '%Y-%m'),
            ['UnitsSold', 'DESC'],
        ],
    })
    .then((dbInvoice) => res.json(dbInvoice))
    .catch((err) => res.status(422).json(err));
}

export function getOneMonthlyGenreSales(req, res) {
    db.Invoice.findAll({
        attributes: [
            [db.sequelize.fn('DATE_FORMAT', db.sequelize.col('InvoiceDate'), '%b %Y'), 'YearMonth'],
            [db.sequelize.col("InvoiceLine.Track.Genre.Name"), "Genre"],
            [db.sequelize.fn('SUM', db.sequelize.col('Quantity')), 'UnitsSold']
        ],
        include: {
            model: db.InvoiceLine,
            attributes: [],
            required: true,
            as: 'invoiceline',
            include: {
                model: db.Track,
                attributes: [],
                as: 'track',
                include: {
                    model: db.Genre,
                    attributes: [],
                    as: 'genre',
                }
            }
        },
        group: ['Genre', 'YearMonth'],
        order: [
            db.sequelize.fn('DATE_FORMAT', db.sequelize.col('InvoiceDate'), '%Y-%m'),
            ['UnitsSold', 'DESC'],
        ],
        having: {
            Genre: req.params.genre,
        }
    })
    .then((dbInvoice) => res.json(dbInvoice))
    .catch((err) => res.status(422).json(err));
}