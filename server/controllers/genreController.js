import db from "../models/index.js";

export function findAll(_req, res) {
    db.Genre.findAll({})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
}