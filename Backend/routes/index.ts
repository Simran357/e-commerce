import express from "express";
const router = express.Router();
import getProductsController from "../products/controller/getProductController";
router.post("/products",getProductsController)
export default router