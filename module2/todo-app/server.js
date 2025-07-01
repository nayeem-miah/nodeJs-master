const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log({ req, res });
    res.end("sever is connect......")
})

server.listen(5000, "127.0.0.1", () => {
    console.log("todo server is running..... http://localhost:5000 ✅");
})
