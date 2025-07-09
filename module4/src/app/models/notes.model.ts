import { model, Schema } from "mongoose";
import { INotes } from "../interfaces/notes.interfaces";

// create schema
const notesSchema = new Schema<INotes>(
    {
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
        },
        //  referencing
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// create model
export const Note = model<INotes>("Note", notesSchema);
