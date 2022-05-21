
import { URL } from 'url';

// 3rd Party Librares
import express from 'express';
import bodyParser from 'body-parser';

// Custom Imports
import { router as adminRoutes } from './routes/admin.js';
import { router as shopRoutes } from './routes/shop.js';



const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    const customPath = new URL('views/404.html', import.meta.url).pathname;
    res.sendFile(customPath)
})

app.listen(3001, () => {
    console.log("Listening on port 3001...")
})
// const server = createServer(app);

// server.listen(3001);