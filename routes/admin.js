import express from "express";
import { getAddProductPage, getAdminProducts, postAddProductPage } from "../controllers/admin.js";

export const router = express.Router();

// GET 
router.get('/add-product', getAddProductPage) // Do not call function() just reference function

// Get
router.get('/products', getAdminProducts) // Do not call function() just reference function

// POST
router.post('/add-product', postAddProductPage) // Do not call function() just reference function