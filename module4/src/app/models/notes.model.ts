import { model, Schema } from "mongoose";

// create schema
const notesSchema = new Schema(
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
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// create model
export const Note = model("Note", notesSchema);
