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
const todos_routes_1 = __importDefault(require("./app/todos/todos.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // JSON middleware
// application routes
app.use("/todos", todos_routes_1.default);
app.get("/", (req, res, next) => {
    // console.log({
    //     url: req.url,
    //     method: req.method,
    //     header: req.header
    // });
    next();
}, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("welcome to todo app");
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong ",
            error: error
        });
    }
}));
//  create custom error handler
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(something);
        res.send("something went error");
    }
    catch (error) {
        next(error);
    }
}));
// route not found 
app.use((req, res, next) => {
    res.status(404).send({
        message: "route not found"
    });
});
// global error handling 
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong .....",
            error: error
        });
    }
});
exports.default = app;
/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 *
 * app file --> routing , handler, middleware, route related error handling
 *
 * app folder ----------> app business logic handling like create, read , update, delete
 */ 
