"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mongodb_1 = require("../../config/mongodb");
const todosRouter = express_1.default.Router();
const fileURLToPath = path_1.default.join(__dirname, "../../../db/todos.json");
const db = mongodb_1.client.db("todosDB").collection("todos");
// get all todos 
todosRouter.get('/all-todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db.find().toArray();
    res.send(result);
}));
// create a todos
todosRouter.post('/create-todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = req.body;
    const result = yield db.insertOne(todos);
    res.send(result);
}));
todosRouter.get('/todos', (req, res) => {
    //  dynamic route --------> /todos/:title/:data
    const title = req.params; // /prisma---> { title: 'prisma' }
    // console.log(title);
    // query ---> ///todos?title&description=prisma  ------->{ title: '', description: 'prisma' }
    console.log(req.query);
    const data = fs_1.default.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.send(data);
});
//  updated todos
todosRouter.patch("/update/:title", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("deleted success");
}));
//  updated todos
todosRouter.delete("/deleted/:title", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("deleted success");
}));
exports.default = todosRouter;
