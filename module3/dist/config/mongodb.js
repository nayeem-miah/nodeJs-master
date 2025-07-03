"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const mongodb_1 = require("mongodb");
// const uri = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPass}@cluster0.bomlehy.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;
const uri = "mongodb://localhost:27017/todosDB";
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
