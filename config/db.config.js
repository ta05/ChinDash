import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: "Chinook",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};

module.exports = dbConfig;