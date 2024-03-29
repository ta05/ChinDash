import path from "path";
import express from "express";
import apiRoutes from "./api/index.js";
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

const router = express.Router();

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename).split(sep).slice(0, -2).join(sep);
router.use(function(_req, res) {
    res.sendFile(path.join(__dirname, "client/index.html"));
});

export default router;