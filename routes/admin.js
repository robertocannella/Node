import express from "express";

export const router = express.Router();

// GET 
router.get('/add-product', (req, res, next) => {
    console.log("add product middleware");
    // -- send response:
    res.send('<h1>The Add Product Page.</h1><form action="add-product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
})

// POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
    console.log("add product middleware");
})