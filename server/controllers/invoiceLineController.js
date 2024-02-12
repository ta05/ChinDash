import db from "../models/index.js";

export function getAllGenreSales(_req, res) {
    db.InvoiceLine.findAll({
        attributes: [
            [db.sequelize.col("Track.Genre.Name"), "Genre"],
            [db.sequelize.fn('SUM', db.sequelize.col('Quantity')), 'UnitsSold'],
        ],
        include: {
            model: db.Track,
            attributes: [],
            as: 'track',
            include: {
                model: db.Genre,
                attributes: [],
                as: 'genre',
            }
        },
        group: ['Genre'],
        order: [
            ['UnitsSold', 'DESC'],
        ],
    })
    .then((dbInvoice) => res.json(dbInvoice))
    .catch((err) => res.status(422).json(err));
};

export function getTopGenreSales(req, res) {
    db.InvoiceLine.findAll({
        attributes: [
            [db.sequelize.col("Track.Genre.Name"), "Genre"],
            [db.sequelize.fn('SUM', db.sequelize.col('Quantity')), 'UnitsSold'],
        ],
        include: {
            model: db.Track,
            attributes: [],
            as: 'track',
            include: {
                model: db.Genre,
                attributes: [],
                as: 'genre',
            }
        },
        group: ['Genre'],
        order: [
            ['UnitsSold', 'DESC'],
        ],
        limit: +req.params.limit,
    })
    .then((dbInvoice) => res.json(dbInvoice))
    .catch((err) => res.status(422).json(err));
};

export function addInvoiceLine(req, res) {
    
    db.InvoiceLine.create({
        InvoiceLineId: req.body.invoiceLineId,
        InvoiceId: req.body.invoiceId,
        TrackId: req.body.trackId,
        UnitPrice: req.body.unitPrice,
        Quantity: req.body.quantity,
    })
    .then((dbInvoiceLine) => {
        res.status(200);
        res.json(dbInvoiceLine.get({plain: true}));
    })
    .catch((err) => res.status(422).json(err));
}