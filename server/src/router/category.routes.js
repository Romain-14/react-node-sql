import { Router } from "express";
import { getAll } from "../controller/category.js";
const router = Router();

router.get("/all", getAll);

export default router;
