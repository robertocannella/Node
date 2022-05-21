import { createServer } from 'http';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/add-product', (req, res, next) => {
    console.log("add product middleware");
    // -- send response:
    res.send('<h1>The Add Product Page.</h1><form action="product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
})

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
    console.log("product middleware");
})

app.use('/', (req, res, next) => {
    console.log("another middleware");
    // -- send response:
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3001, () => {
    console.log("Listening on port 3001...")
})
// const server = createServer(app);

// server.listen(3001);