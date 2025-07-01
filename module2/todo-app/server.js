const http = require('node:http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    if (req.url === "/todo/update-todos" && req.method === "PATCH") {
        // console.log("data update success");
        res.end("data updated success")
    } else if (req.url === "/todo/create-todos" && req.method === "POST") {
        res.end("todo inserted success")
    } else if (req.url === "/todo/getall" && req.method === "GET") {
        res.end("get all todos success")
    }
    else {
        res.end("route not found")
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("todo server is running..... http://localhost:5000 ✅");
})
