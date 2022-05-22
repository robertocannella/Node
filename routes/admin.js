import express from "express";
import { URL } from 'url';

export const router = express.Router();

// Temporary Data Holders
export const products = [];

// GET 
router.get('/add-product', (req, res, next) => {
    // -- send response:
    res.render('add-product',
        {
            docTitle: 'Add Product',                // The page title
            activePath: '/admin/add-product',       // Used to set active class in ejs main        
        })
})

// POST
router.post('/add-product', (req, res, next) => {
    // add data to products arrays
    products.push({ title: req.body.title });
    // -- Redirect
    res.redirect('/');
})