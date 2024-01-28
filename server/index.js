import express, { json, urlencoded, static as static_ } from 'express';
// import db from '../config/db.js';
import cors from 'cors';
import dotenv from "dotenv";
import router from './routes/index.js';

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
dotenv.config();

// Define middleware
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(static_("client/build"));
}

// Add view and API routes
app.use(router);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});