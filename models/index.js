import dbConfig from "../config/db.config.js";
import { Sequelize, DataTypes } from "sequelize";
import Genre from "./Genre.js";
import Track from "./Track.js";
import Invoice from "./Invoice.js";
import InvoiceLine from "./InvoiceLine.js";


// Create sequelize object
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

// Add models to db object
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Genre = Genre(sequelize, DataTypes);
db.Track = Track(sequelize, DataTypes);
db.Invoice = Invoice(sequelize, DataTypes);
db.InvoiceLine = InvoiceLine(sequelize, DataTypes);

// Create the associations between each model
Object.keys(db).forEach((model) => {
    if (db[model].associate) {
        db[model].associate(db);
    }
})

export default db;