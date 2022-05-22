export const products = []
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
    products.push({ title: req.body.title });
    // -- Redirect
    res.redirect('/');
}

export const getProductsPage = (req, res, next) => {
    // -- send response:
    res.render('shop',
        {
            prods: products,                        // Products array to iterate
            docTitle: "Shop!",                      // The page title
            activePath: '/',                        // Used to set active class in ejs main
        })
}