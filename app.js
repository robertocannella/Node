import { URL } from 'url';

// 3rd Party Librares
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';


// Custom Imports
import { router as adminRoutes, products } from './routes/admin.js';
import { router as shopRoutes } from './routes/shop.js';


const app = express();

// HandBars Setup
app.engine('handlebars', engine({           // Only require with custom configurations below
    layoutsDir: 'views/layouts/',           // This is default
    defaultLayout: 'main',                  // This is default
    extname: 'handlebars'                   // This is default

}));
app.set('view engine', 'handlebars')


// Public accessible folder
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(new URL('public', import.meta.url).pathname))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render('404', { docTitle: '404 Not Found' })
})

app.listen(3001, () => {
    console.log("Listening on port 3001...")
})
