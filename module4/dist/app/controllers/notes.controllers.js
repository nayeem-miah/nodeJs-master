"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = __importDefault(require("express"));
const notes_model_1 = require("../models/notes.model");
exports.notesRouter = express_1.default.Router();
// create a notes
exports.notesRouter.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const note = yield notes_model_1.Note.create(body);
    res.status(201).json({
        message: "data inserted success",
        data: note
    });
}));
// get all notes
exports.notesRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_model_1.Note.find().populate("user");
    res.status(200).json({
        message: "get all notes success",
        notes: notes
    });
}));
// get a notes ----- /:noteId
exports.notesRouter.get("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const note = await Note.find({ _id: req.params.noteId });
    // const note = await Note.findOne({ _id: req.params.noteId }); // any document by filter
    const note = yield notes_model_1.Note.findById(req.params.noteId); // query in mongodb objectId
    res.status(200).json({
        success: true,
        message: "data get success",
        data: note
    });
}));
//  updated notes
exports.notesRouter.patch("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const updateDoc = req.body;
    // const note = await Note.updateOne({_id: noteId}, updateDoc, { new: true })
    // const note = await Note.findOneAndUpdate({ _id: noteId }, updateDoc, { new: true })
    // best way
    const note = yield notes_model_1.Note.findByIdAndUpdate(noteId, updateDoc, { new: true });
    res.status(200).json({
        success: true,
        message: "data updated success",
        data: note
    });
}));
//  deleted a document
exports.notesRouter.delete("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    // const note = await Note.deleteOne({ _id: noteId });
    // const note = await Note.findOneAndDelete({ _id: noteId });
    const note = yield notes_model_1.Note.findByIdAndDelete(noteId);
    res.status(200).json({
        success: true,
        message: "data deleted success",
        data: note
    });
}));
