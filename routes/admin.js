import express from "express";
import { getAddProductPage, postAddProductPage } from "../controllers/products.js";

export const router = express.Router();

// GET 
router.get('/add-product', getAddProductPage) // Do not call function() just reference function

// POST
router.post('/add-product', postAddProductPage) // Do not call function() just reference function