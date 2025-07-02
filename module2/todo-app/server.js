const http = require('node:http');
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;


    // create a todo
    if (pathname === "/todo/create-todo" && req.method === "POST") {
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
    // get a todo
    else if (pathname === "/todo" && req.method === "GET") {
        const title = url.searchParams.get("title");
        const data = fs.readFileSync(filepath, { encoding: "utf-8" })
        const parseData = JSON.parse(data);
        const filterData = parseData.find(da => da.title === title);
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(JSON.stringify(filterData))
    }

    //  get all todos
    else if (pathname === "/todo/getall" && req.method === "GET") {
        const data = fs.readFileSync(filepath, { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(data);
    }
    // updated  a todo
    else if (pathname === "/todo/update-todo" && req.method === "PATCH") {
        const title = url.searchParams.get("title");

        let data = ""
        req.on("data", (chunk) => {
            data = data + chunk;
        })

        req.on("end", () => {
            const { description } = JSON.parse(data);

            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" });
            const parseAllTodos = JSON.parse(allTodos);
            const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
            // console.log(parseAllTodos);
            parseAllTodos[todoIndex].description = description;

            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), { encoding: "utf-8" })
            // return json data
            res.end(JSON.stringify({
                title,
                description,
                createAt: parseAllTodos[todoIndex].createAt
            }, null, 2))
        });
    }
    //  deleted success
    else if (pathname === "/todo/delete-todo" && req.method === "DELETE") {
        const title = url.searchParams.get("title");

        const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" });
        const parseData = JSON.parse(allTodos); // JSON string → JavaScript array

        const updatedTodos = parseData.filter((todo) => todo.title !== title);

        if (parseData.length === updatedTodos.length) {
            res.statusCode = 404;
            res.end(`todo "${title}" does not find`);
            return;
        }
        fs.writeFileSync(filepath, JSON.stringify(updatedTodos, null, 2));

        res.statusCode = 200;
        res.end(`todo "${title}" deleted success`);
    }
    else {
        res.end("route not found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("todo server is running..... http://localhost:5000 ✅");
})
