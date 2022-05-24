import exp from 'constants';
import * as fs from 'fs';
import { URL } from 'url';


const path = new URL('../data/cart.json', import.meta.url).pathname;


export class Cart {
    static addProduct(id, price) {
        // get the previous cart
        fs.readFile(path, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent)
            }
            console.log(cart)
            // analize cart => find existing product
            let updatedProduct;
            const existingProductIndex = cart.products.findIndex(p => p.id === id)
            const existingProduct = cart.products[existingProductIndex]
            console.log(existingProductIndex, existingProduct)
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else { // add new product update cost
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +price
            fs.writeFile(path, JSON.stringify(cart), (err) => {
                console.log(err)
            });
        })
    }
}