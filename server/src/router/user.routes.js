import { Router } from "express";
import { createAccount } from "../../controller/user.js";

const router = Router();

router.post("/createAccount", createAccount);


export default router;
