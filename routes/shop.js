import express from "express";
import * as shop from "../controllers/shop.js";

export const router = express.Router();

router.get('/', shop.getIndex);

router.get('/products', shop.getProductsPage);

router.get('/products/:productId', shop.getProductById);

router.get('/cart', shop.getCart)

router.post('/cart', shop.postCart)

router.get('/checkout', shop.getCheckout)

router.get('/orders', shop.getOrders)