import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

const todosRouter = express.Router();
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


todosRouter.get('/todo/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await db.findOne(query)
    res.json(result)
});

//  updated todos
todosRouter.put("/update/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    const query = { _id: new ObjectId(id) };
    const result = await db.updateOne(
        query, {
        $set: {
            title,
            description,
            priority,
            isCompleted
        }
    },
        { upsert: true });
    res.send(result)
});
//  updated todos
todosRouter.delete("/deleted/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await db.deleteOne();
    res.json(result)
})

export default todosRouter;
