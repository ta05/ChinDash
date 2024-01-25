import dbConfig from "../config/db.config";
import { Sequelize, DataTypes } from "sequelize";
import GenreSold from "./Genre.js";

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

db.genresSold = GenreSold(sequelize, DataTypes);

module.exports = db;