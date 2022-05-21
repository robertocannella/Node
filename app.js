import { fstat } from 'fs';
import { createServer } from 'http';
import * as fs from 'fs';

const server = createServer((req, res) => { // Anonymous RequestListener
    // Event loop
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('content-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Response HTML</title></head>')
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">Send</button></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === "POST") {

        // get request data (register event listener on data buffer)
        const body = []
        req.on('data', (chunck) => {
            console.log(chunck)
            body.push(chunck)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody)
            fs.writeFileSync("message.txt", message)
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Response HTML</title></head>')
    res.write('<body><h1>Repsonse HTML</body>')
    res.write('</html>')
    res.end();
    //
    // Exit the Event Loop
    //
    //process.exit();
});

server.listen(3001);