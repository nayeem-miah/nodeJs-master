"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const todosRouter = express_1.default.Router();
const fileURLToPath = path_1.default.join(__dirname, "../../../db/todos.json");
// get all todos 
todosRouter.get('/all-todos', (req, res) => {
    const data = fs_1.default.readFileSync(fileURLToPath, { encoding: "utf-8" });
    res.json({
        message: "todo router ",
        data: data
    });
});
// create a todos
todosRouter.post('/todos/create-todos', (req, res) => {
    console.log("data is loading ..........");
    const { title, description } = req.body;
    console.log(title, description);
    res.status(200).send({ title, description });
});
exports.default = todosRouter;
