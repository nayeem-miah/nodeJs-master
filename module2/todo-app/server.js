const http = require('node:http');
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    if (req.url === "/todo/update-todo" && req.method === "PATCH") {
        // console.log("data update success");
        res.end("data updated success")


    }

    // create a todo
    else if (req.url === "/todo/create-todo" && req.method === "POST") {
        let data = ""
        req.on("data", (chunk) => {
            data = data + chunk;
        })

        req.on("end", () => {
            const { title, description } = JSON.parse(data)

            const createAt = new Date().toLocaleString();
            // console.log({ title, description, createAt });

            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" });
            const parseAllTodos = JSON.parse(allTodos);
            parseAllTodos.push({ title, description, createAt });

            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), { encoding: "utf-8" })
            // return json data
            res.end(JSON.stringify({
                title,
                description,
                createAt
            }, null, 2))
        });
    }

    //  get all todos
    else if (req.url === "/todo/getall" && req.method === "GET") {
        const data = fs.readFileSync(filepath, { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "application/json",

        })
        res.end(
            data
        );
    }
    else {
        res.end("route not found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("todo server is running..... http://localhost:5000 ✅");
})
