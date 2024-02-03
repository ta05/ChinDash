import express from "express";
import { getAllGenreSales, getTopGenreSales } from "../../controllers/invoiceLineController.js";

const router = express.Router();

router.route("/sales")
    .get(getAllGenreSales);

router.route("/sales/:limit")
    .get(getTopGenreSales);


export default router;