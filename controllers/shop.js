import { Product } from "../models/product.js";



export const getProductsPage = (req, res, next) => {
    // -- send response:
    Product.fetchAll((products) => {
        res.render('shop/product-list',
            {
                prods: products,                        // Products array to iterate
                docTitle: "All Products",                      // The page title
                activePath: '/products',                        // Used to set active class in ejs main
            })
    })

}

export const getIndex = (req, res, next) => {
    res.render('shop/index', {
        docTitle: "Welcome to the Shop!",
        activePath: '/'
    })
}
export const getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: "Shopping Cart",
        activePath: '/cart'
    })
}
export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: "Checkout",
        activePath: '/checkout'
    })
}