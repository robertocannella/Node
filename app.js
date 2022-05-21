import { createServer } from 'http';

import express from 'express';

import { requestHanderler as routes } from './routes.js';
import exp from 'constants';

const app = express();
app.use((req, res, next) => {
    console.log("middleware");
    next();
})
app.use((req, res, next) => {
    console.log("another middleware");
})


const server = createServer(app);

server.listen(3001);