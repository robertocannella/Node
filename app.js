import { createServer } from 'http';



const server = createServer((req, res) => { // Anonymous RequestListener
    // Event loop
    console.log(req)


    //
    // Exit the Event Loop
    //
    //process.exit();
});

server.listen(3001);