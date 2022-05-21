import express from "express";
import { URL } from 'url';


export const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("another middleware");
    // -- send response:
    const customPath = new URL('../views/shop.html', import.meta.url).pathname;
    res.sendFile(customPath)
})