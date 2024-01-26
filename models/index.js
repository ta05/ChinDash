import dbConfig from "../config/db.config";
import { Sequelize, DataTypes } from "sequelize";
import Genre from "./Genre.js";
import Track from "./Track.js";
import Invoice from "./Invoice.js";
import InvoiceLine from "./InvoiceLine.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Genre = Genre(sequelize, DataTypes);
db.Track = Track(sequelize, DataTypes);
db.Invoice = Invoice(sequelize, DataTypes);
db.InvoiceLine = InvoiceLine(sequelize, DataTypes);

module.exports = db;