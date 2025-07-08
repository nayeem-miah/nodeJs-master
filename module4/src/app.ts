import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

// json middleware
app.use(express.json());

// create schema
const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    contents: {
        type: String,
        default: "",
        trim: true
    },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: {
        type: Boolean,
        default: false
    },
    tags: {
        label: { type: String, required: true },
        color: { type: String, default: "gray" }
    }

});

// create model
const Note = model("Note", notesSchema);

// create a notes
app.post("/notes/create-note", async (req: Request, res: Response) => {
    const body = req.body;

    // approach 1 of creating a data
    // const myNote = new Note({
    //     title: "learning express",
    //     tags: {
    //         label: "Mongoose database",

    //     }
    // });
    // await myNote.save()

    //  approach 2
    const note = await Note.create(body)
    res.status(201).json({
        message: "data inserted success",
        data: note
    })
});

// get all notes
app.get("/notes", async (req: Request, res: Response) => {
    const notes = await Note.find();
    res.status(200).json({
        message: "get all notes success",
        notes: notes
    })
})






app.get("/", (req: Request, res: Response) => {
    res.send("server is running .....");
})


export default app;