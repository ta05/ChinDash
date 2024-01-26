import express from "express";
import genreRoutes from "./genre-api-routes.js";

// Genre routes
const router = express.Router();
router.use("/genre", genreRoutes);

export default router;