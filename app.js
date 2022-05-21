import { createServer } from 'http';



const server = createServer((req, res) => { // Anonymous RequestListener
    // Event loop

    console.log(req.url, req.method)
    console.log(req.headers)


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