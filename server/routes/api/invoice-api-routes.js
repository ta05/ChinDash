import express from "express";
import { getAllGenreSales, getGenreSales } from "../../controllers/invoiceController.js";

const router = express.Router();

router.route("/sales")
    .get(getAllGenreSales);

router.route("/sales/:genre")
    .get(getGenreSales);


export default router;