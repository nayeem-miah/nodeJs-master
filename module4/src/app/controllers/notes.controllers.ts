import express, { Request, Response } from 'express';
import { Note } from '../models/notes.model';
export const notesRouter = express.Router();

// create a notes
notesRouter.post("/create-note", async (req: Request, res: Response) => {
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
notesRouter.get("/", async (req: Request, res: Response) => {
    const notes = await Note.find().populate("user")
    res.status(200).json({
        message: "get all notes success",
        notes: notes
    })
});

// get a notes ----- /:noteId
notesRouter.get("/:noteId", async (req: Request, res: Response) => {

    // const note = await Note.find({ _id: req.params.noteId });
    // const note = await Note.findOne({ _id: req.params.noteId }); // any document by filter
    const note = await Note.findById(req.params.noteId); // query in mongodb objectId

    res.status(200).json({
        success: true,
        message: "data get success",
        data: note
    })
});

//  updated notes
notesRouter.patch("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const updateDoc = req.body
    // const note = await Note.updateOne({_id: noteId}, updateDoc, { new: true })
    // const note = await Note.findOneAndUpdate({ _id: noteId }, updateDoc, { new: true })
    // best way
    const note = await Note.findByIdAndUpdate(noteId, updateDoc, { new: true })
    res.status(200).json({
        success: true,
        message: "data updated success",
        data: note
    })
});

//  deleted a document
notesRouter.delete("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    // const note = await Note.deleteOne({ _id: noteId });
    // const note = await Note.findOneAndDelete({ _id: noteId });
    const note = await Note.findByIdAndDelete(noteId);

    res.status(200).json({
        success: true,
        message: "data deleted success",
        data: note
    })
});
