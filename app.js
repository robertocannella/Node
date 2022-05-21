import { createServer } from 'http';
import { requestHanderler as routes } from './routes.js';

const server = createServer(routes);

server.listen(3001);