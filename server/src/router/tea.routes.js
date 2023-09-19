import { Router } from "express";
import { getAll, getByValues, getLastInserted, getBestSeller, getFavorite } from "../controller/tea.js";

const router = Router();

router.get("/all", getAll);

router.get("/lastInserted", getLastInserted);
router.get("/bestSeller", getBestSeller);
router.get("/favorite", getFavorite);

router.get("/:url_tea/:id", getByValues);

export default router;
