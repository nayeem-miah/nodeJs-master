import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

const todosRouter = express.Router();
const fileURLToPath = path.join(__dirname, "../../../db/todos.json");

// get all todos 
todosRouter.get('/all-todos', (req: Request, res: Response) => {
    const data = fs.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.json({
        message: "todo router ",
        data: data
    })
}
);

// create a todos
todosRouter.post('/todos/create-todos', (req: Request, res: Response) => {
    console.log("data is loading ..........");
    const { title, description } = req.body;
    console.log(title, description);
    res.status(200).send({ title, description })
})


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
