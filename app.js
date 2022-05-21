
import express from 'express';
import bodyParser from 'body-parser';

import { router as adminRoutes } from './routes/admin.js';
import { router as shopRoutes } from './routes/shop.js';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404:</h1><h2>Something went wrong</h2>')

})

app.listen(3001, () => {
    console.log("Listening on port 3001...")
})
// const server = createServer(app);

// server.listen(3001);