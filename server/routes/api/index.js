import express from "express";
import genreRoutes from "./genre-api-routes.js";
import trackRoutes from "./track-api-routes.js";
import invoiceRoutes from "./invoice-api-routes.js"

// Genre routes
const router = express.Router();
router.use("/genre", genreRoutes);
router.use("/track", trackRoutes);
router.use("/invoice", invoiceRoutes);

export default router;