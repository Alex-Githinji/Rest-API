import { Router } from "express";
import { getallproducts } from "../controller/controller.js";
const router = Router();

router.get("/", getallproducts)


export default router;
