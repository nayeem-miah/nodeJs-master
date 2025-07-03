
import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPass}@cluster0.bomlehy.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;
const uri = "mongodb://localhost:27017/todosDB"

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});