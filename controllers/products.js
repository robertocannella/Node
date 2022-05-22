import { Product } from "../models/product.js";

// GET 
export const getAddProductPage = (req, res, next) => {
    // -- send response:
    res.render('add-product',
        {
            docTitle: 'Add Product',                // The page title
            activePath: '/admin/add-product',       // Used to set active class in ejs main        
        })
}

export const postAddProductPage = (req, res, next) => {
    // add data to products arrays
    // -- Redirect
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

export const getProductsPage = (req, res, next) => {
    // -- send response:
    Product.fetchAll((products) => {
        res.render('shop',
            {
                prods: products,                        // Products array to iterate
                docTitle: "Shop!",                      // The page title
                activePath: '/',                        // Used to set active class in ejs main
            })
    })

}