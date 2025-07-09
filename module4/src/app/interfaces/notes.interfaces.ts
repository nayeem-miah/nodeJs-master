import { Types } from "mongoose";

export interface INotes {
    title: string;
    contents: string;
    category: "personal" | "work" | "study" | "other";
    pinned: boolean;
    tags: {
        label: string,
        color: string
    },
    user: Types.ObjectId;
}