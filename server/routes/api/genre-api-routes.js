import express from "express";
import { findAll } from "../../controllers/genreController.js";

const router = express.Router();

router.route("/")
    .get(findAll);


export default router;