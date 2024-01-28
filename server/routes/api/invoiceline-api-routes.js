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