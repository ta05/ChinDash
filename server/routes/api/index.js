import express from "express";
import genreRoutes from "./genre-api-routes.js";
import trackRoutes from "./track-api-routes.js";
import invoiceRoutes from "./invoice-api-routes.js";
import invoiceLineRoutes from "./invoiceline-api-routes.js";

// Genre routes
const router = express.Router();
router.use("/genre", genreRoutes);
router.use("/track", trackRoutes);
router.use("/invoice", invoiceRoutes);
router.use("/invoiceline", invoiceLineRoutes);

export default router;