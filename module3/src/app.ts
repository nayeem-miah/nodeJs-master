import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json()); // JSON middleware
const todosRouter = express.Router();
app.use("/todos", todosRouter);

const fileURLToPath = path.join(__dirname, "../db/todos.json");


todosRouter.get('/all-todos', (req: Request, res: Response) => {
    const data = fs.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.json({
        message: "todo router ",
        data: data
    })
})

// app.get('/todos', (req: Request, res: Response) => {
//     //  dynamic route --------> /todos/:title/:data

//     const title = req.params; // /prisma---> { title: 'prisma' }
//     // console.log(title);
//     // query ---> ///todos?title&description=prisma  ------->{ title: '', description: 'prisma' }
//     console.log(req.query);
//     const data = fs.readFileSync(fileURLToPath, { encoding: "utf-8" });
//     res.send(data)
// })
app.post('/todos/create-todos', (req: Request, res: Response) => {
    console.log("data is loading ..........");
    const { title, description } = req.body;
    console.log(title, description);
    res.status(200).send({ title, description })
})

export default app;

/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 * 
 * app file --> routing , handler, middleware, route related error handling
 * 
 * app folder ----------> app business logic handling like create, read , update, delete
 */