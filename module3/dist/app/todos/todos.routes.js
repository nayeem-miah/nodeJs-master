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
