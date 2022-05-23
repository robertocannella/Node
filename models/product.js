import * as fs from 'fs';
import { URL } from 'url';

const products = []
const path = new URL('../data/products.json', import.meta.url).pathname;

const getProductsFromFile = cb => {
    fs.readFile(path, (err, fileContent) => {
        if (!err) {
            cb(JSON.parse(fileContent))
        } else {
            cb([])
        }
    })
}
export class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(path, JSON.stringify(products), (err) => {
                console.log(err)
            });
        })
    }
    static fetchAll(callback) {
        getProductsFromFile(callback)
    }

}