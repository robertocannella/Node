import express from "express";
import { products } from "./admin.js";
import { URL } from 'url';


export const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(products)
    // -- send response:
    res.render('shop', { prods: products, docTitle: "Shop!" })
})