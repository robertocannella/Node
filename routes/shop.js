import express from "express";
import { products } from "./admin.js";


export const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(products)
    // -- send response:
    res.render('shop',
        {
            prods: products,                        // Products array to iterate
            docTitle: "Shop!",                      // The page title
            activePath: '/',                        // Used to set active class in ejs main
        })
})