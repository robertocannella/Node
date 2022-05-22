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
            hasProducts: products.length > 0,       // Used by pug/handlebars
            activePath: '/',                        // Used to set active class in pug main
            activeShop: true,                        // Used to set active class in handlebars main
            productCSS: true                         // Set css links in handlebars main       
        })
})