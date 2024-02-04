import express from "express";
import { getAll, getTrack } from "../../controllers/trackController.js";

const router = express.Router();

router.route("/")
    .get(getAll);

router.route("/:name")
    .get(getTrack);

export default router;