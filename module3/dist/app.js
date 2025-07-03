"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // JSON middleware
const todosRouter = express_1.default.Router();
app.use("/todos", todosRouter);
const fileURLToPath = path_1.default.join(__dirname, "../db/todos.json");
todosRouter.get('/all-todos', (req, res) => {
    const data = fs_1.default.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.json({
        message: "todo router ",
        data: data
    });
});
// app.get('/todos', (req: Request, res: Response) => {
//     //  dynamic route --------> /todos/:title/:data
//     const title = req.params; // /prisma---> { title: 'prisma' }
//     // console.log(title);
//     // query ---> ///todos?title&description=prisma  ------->{ title: '', description: 'prisma' }
//     console.log(req.query);
//     const data = fs.readFileSync(fileURLToPath, { encoding: "utf-8" });
//     res.send(data)
// })
app.post('/todos/create-todos', (req, res) => {
    console.log("data is loading ..........");
    const { title, description } = req.body;
    console.log(title, description);
    res.status(200).send({ title, description });
});
exports.default = app;
/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 *
 * app file --> routing , handler, middleware, route related error handling
 *
 * app folder ----------> app business logic handling like create, read , update, delete
 */ 
