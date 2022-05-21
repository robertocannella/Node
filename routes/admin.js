import express from "express";
import { URL } from 'url';
export const router = express.Router();


// GET 
router.get('/add-product', (req, res, next) => {
    // -- send response:
    const customPath = new URL('../views/add-product.html', import.meta.url).pathname;
    res.sendFile(customPath)
})

// POST
router.post('/add-product', (req, res, next) => {
    // -- Redirect
    console.log(req.body)
    res.redirect('/');
})