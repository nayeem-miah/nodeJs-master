import express, { Application, Request, response, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();


// create schema
const notesSchema = new Schema({
    title: String,
    contents: String
});

// create model
const Note = model("Note", notesSchema);

app.post("/create-note", async (req: Request, res: Response) => {
    const myNote = new Note({
        title: "learning mongoose",
        contents: "something..............",
        publisherNumber: "hello mongoose"
    });
    const result = await myNote.save();
    res.status(201).json({
        message: "notes inserted success",
        note: result
    })
})

app.get("/", (req: Request, res: Response) => {
    res.send("server is running .....");
})


export default app;