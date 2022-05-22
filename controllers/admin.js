import { Product } from "../models/product.js";


// GET 
export const getAddProductPage = (req, res, next) => {
    // -- send response:
    res.render('admin/add-product',
        {
            docTitle: 'Add Product',                // The page title
            activePath: '/admin/add-product',       // Used to set active class in ejs main        
        })
}

export const getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        // -- send response:
        res.render('admin/products',
            {
                prods: products,
                docTitle: 'Admin Products',                // The page title
                activePath: '/admin/products',       // Used to set active class in ejs main        
            })
    });

}

export const postAddProductPage = (req, res, next) => {
    // add data to products arrays
    // -- Redirect
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}