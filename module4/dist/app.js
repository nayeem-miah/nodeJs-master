"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_controllers_1 = require("./app/controllers/notes.controllers");
const user_controllers_1 = require("./app/controllers/user.controllers");
const app = (0, express_1.default)();
// json middleware
app.use(express_1.default.json());
// application routes
app.use("/notes", notes_controllers_1.notesRouter);
app.use("/users", user_controllers_1.userRouter);
app.get("/", (req, res) => {
    res.send("server is running .....");
});
exports.default = app;
//MVC ------> model , view , controllers
