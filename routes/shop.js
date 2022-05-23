import express from "express";
import { getProductsPage, getIndex, getCart, getCheckout, getOrders } from "../controllers/shop.js";

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProductsPage);

router.get('/cart', getCart)

router.get('/checkout', getCheckout)

router.get('/orders', getOrders)