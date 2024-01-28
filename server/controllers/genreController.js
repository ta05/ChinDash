import db from "../models/index.js";

export function getAll(_req, res) {
    db.Genre.findAll({})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
}