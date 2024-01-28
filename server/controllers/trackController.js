import db from "../models/index.js";

export function getAll(_req, res) {
    db.Track.findAll({
        attributes: [
            'TrackId',
            'Name',
            [db.sequelize.col("genre.Name"), "Category"],
            'UnitPrice'
        ],
        include: [
            {
                model: db.Genre,
                attributes: [],
                required: true,
                as: 'genre',
            }
        ],
    })
        .then((dbTrack) => res.json(dbTrack))
        .catch((err) => res.status(422).json(err));
}