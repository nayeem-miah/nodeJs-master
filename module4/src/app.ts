import express, { Application, Request, Response } from "express";
import { notesRouter } from "./app/controllers/notes.controllers";
import { userRouter } from "./app/controllers/user.controllers";

const app: Application = express();

// json middleware
app.use(express.json());

// application routes
app.use("/notes", notesRouter);
app.use("/users", userRouter)


app.get("/", (req: Request, res: Response) => {
    res.send("server is running .....");
})


export default app;

//MVC ------> model , view , controllers