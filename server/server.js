// Creating the Http server using Node.js

const http = require('node:http');

const server = http.createServer((req, res) => {

    if(req.url === "/getData")
    {
        res.end('This is secret data');
    }
    res.end('Hello, World!');
});
server.listen(7777);