import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app"

let server
const port = 5000;
const uri = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPass}@cluster0.bomlehy.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;

// const uri = "mongodb://localhost:27017/todosDB"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



const bootstrap = async () => {
    await client.connect();
    console.log("connect to mongoDB");

    // const db = await client.db("todosDB");
    // // console.log(db);
    // const collection = await db.collection("todos").insertOne({
    //     title: "nodejs",
    //     body: "nodejs is a js frameworks"
    // })


    server = app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
}
bootstrap();