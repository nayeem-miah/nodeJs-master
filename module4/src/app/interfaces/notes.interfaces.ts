export interface INotes {
    title: string;
    contents: string;
    category: string;
    pinned: boolean;
    tags: {
        label: string,
        color: string
    }
}