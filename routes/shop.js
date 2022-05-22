import express from "express";
import { products } from "./admin.js";
import { URL } from 'url';


export const router = express.Router();

router.get('/', (req, res, next) => {
    // -- send response:
    res.render('shop')
})