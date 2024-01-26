import path from "path";
import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(_req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

export default router;