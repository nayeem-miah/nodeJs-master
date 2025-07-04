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
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
const todosRouter = express_1.default.Router();
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
todosRouter.get('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const query = { _id: new mongodb_2.ObjectId(id) };
    const result = yield db.findOne(query);
    res.json(result);
}));
//  updated todos
todosRouter.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    const query = { _id: new mongodb_2.ObjectId(id) };
    const result = yield db.updateOne(query, {
        $set: {
            title,
            description,
            priority,
            isCompleted
        }
    }, { upsert: true });
    res.send(result);
}));
//  updated todos
todosRouter.delete("/deleted/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const filter = { _id: new mongodb_2.ObjectId(id) };
    const result = yield db.deleteOne();
    res.json(result);
}));
exports.default = todosRouter;
