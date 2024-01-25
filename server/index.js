import express, { json } from 'express';
import db from '../config/db.js';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(json());

dotenv.config();
const PORT = process.env.PORT || 3002;

app.get("/", (_req, res) => {
    res.json("Welcome to the ChinDash application.");
});

app.get("/api/genres", (_req, res) => {
    db.query(
        `SELECT
            DATE_FORMAT(InvoiceDate, '%b %Y') as yearmonth,
            genre.name as genre,
            sum(quantity) as units_sold
        FROM genre INNER JOIN track
            ON (genre.GenreId=track.GenreId) LEFT JOIN invoiceline
            ON (track.TrackId=invoiceline.TrackId) LEFT JOIN invoice
            ON (invoiceline.InvoiceId=invoice.InvoiceId)
        GROUP BY genre.Name, yearmonth
        ORDER BY DATE_FORMAT(InvoiceDate, '%Y-%m'), units_sold DESC;`,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});