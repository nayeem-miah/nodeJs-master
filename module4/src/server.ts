import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";


let server: Server;
const PORT = process.env.PORT || 5000;
const uri: string = process.env.MONGO_URI || "mongodb://localhost:27017/notes"


async function main() {
    try {
        await mongoose.connect(uri)
        console.log("connected to mongodb using mongoose...");
        server = app.listen(PORT, () => {
            console.log(`app is listening prot http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);

    }
}
main()