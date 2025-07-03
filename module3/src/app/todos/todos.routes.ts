import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";

const todosRouter = express.Router();
const fileURLToPath = path.join(__dirname, "../../../db/todos.json");
const db = client.db("todosDB").collection("todos");

// get all todos 
todosRouter.get('/all-todos', async (req: Request, res: Response) => {
    const result = await db.find().toArray();
    res.send(result)
}
);

// create a todos
todosRouter.post('/create-todos', async (req: Request, res: Response) => {
    const todos = req.body;
    const result = await db.insertOne(todos)
    res.send(result)
});


todosRouter.get('/todos', (req: Request, res: Response) => {
    //  dynamic route --------> /todos/:title/:data

    const title = req.params; // /prisma---> { title: 'prisma' }
    // console.log(title);
    // query ---> ///todos?title&description=prisma  ------->{ title: '', description: 'prisma' }
    console.log(req.query);
    const data = fs.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.send(data)
});

//  updated todos
todosRouter.patch("/update/:title", async (req: Request, res: Response) => {
    res.send("deleted success")
})
//  updated todos
todosRouter.delete("/deleted/:title", async (req: Request, res: Response) => {
    res.send("deleted success")
})

export default todosRouter;
