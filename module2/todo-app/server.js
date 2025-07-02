const http = require('node:http');

const data = [
    {
        title: "learning node js ",
        description: "hello node js . node js is a runtime language in javascript",
        date: new Date().toLocaleDateString()
    },
    {
        title: "learning express js ",
        description: "hello express js . express js  is a node.js framework",
        date: new Date().toLocaleDateString()
    },
    {
        title: "learning node js ",
        description: "hello node js . node js is a runtime language in javascript",
        date: new Date().toLocaleDateString()
    },
]
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    if (req.url === "/todo/update-todos" && req.method === "PATCH") {
        // console.log("data update success");
        res.end("data updated success")

    } else if (req.url === "/todo/create-todos" && req.method === "POST") {
        res.end("todo inserted success")
    } else if (req.url === "/todo/getall" && req.method === "GET") {
        res.writeHead(200, {
            "content-type": "application/json",
            // "email": "gh@gmail.com",
        })
        // res.setHeader("content-type", "text/plain");
        // res.setHeader("gmail", "h4@gmail.com");
        // res.statusCode = 201;
        res.end(`<h2>hello html</h2>`);
        // res.end(JSON.stringify(data));
    }
    else {
        res.end("route not found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("todo server is running..... http://localhost:5000 ✅");
})
