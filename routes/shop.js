import express from "express";
import { getProductsPage } from "../controllers/products.js";

export const router = express.Router();

router.get('/', getProductsPage)