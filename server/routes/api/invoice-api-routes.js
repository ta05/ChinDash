import express from "express";
import { addInvoice, getAllMonthlyGenreSales, getOneMonthlyGenreSales } from "../../controllers/invoiceController.js";

const router = express.Router();

router.route("/")
    .post(addInvoice);

router.route("/sales")
    .get(getAllMonthlyGenreSales);

router.route("/sales/:genre")
    .get(getOneMonthlyGenreSales);


export default router;