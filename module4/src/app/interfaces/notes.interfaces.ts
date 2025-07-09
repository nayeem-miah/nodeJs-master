export interface INotes {
    title: string;
    contents: string;
    category: "personal" | "work" | "study" | "other";
    pinned: boolean;
    tags: {
        label: string,
        color: string
    }
}