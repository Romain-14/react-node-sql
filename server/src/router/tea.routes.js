import { Router } from "express";
import { getAll } from "../../controller/tea.js";
const router = Router();

router.get("/all", getAll);

export default router;
