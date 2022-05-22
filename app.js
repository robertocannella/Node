import { URL } from 'url';

// 3rd Party Librares
import express from 'express';
import bodyParser from 'body-parser';


// Custom Imports
import { router as adminRoutes } from './routes/admin.js';
import { router as shopRoutes } from './routes/shop.js';
import { getError404 } from './controllers/errors.js'



const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

// Public accessible folder
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(new URL('public', import.meta.url).pathname))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(getError404)

app.listen(3001, () => {
    console.log("Listening on port 3001...")
})
