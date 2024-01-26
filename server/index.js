import express, { json, urlencoded, static as static_ } from 'express';
// import db from '../config/db.js';
import cors from 'cors';
import dotenv from "dotenv";
import router from '../routes/index.js';

const app = express();
const corsOptions = {
    origin: "http://localhost:8081"
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


// app.get("/api/genres", (_req, res) => {
//     db.query(
//         `SELECT
//             DATE_FORMAT(InvoiceDate, '%b %Y') as yearmonth,
//             genre.name as genre,
//             sum(quantity) as units_sold
//         FROM genre INNER JOIN track
//             ON (genre.GenreId=track.GenreId) LEFT JOIN invoiceline
//             ON (track.TrackId=invoiceline.TrackId) LEFT JOIN invoice
//             ON (invoiceline.InvoiceId=invoice.InvoiceId)
//         GROUP BY genre.Name, yearmonth
//         ORDER BY DATE_FORMAT(InvoiceDate, '%Y-%m'), units_sold DESC;`,
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 res.send(result);
//             }
//         }
//     );
// });

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});