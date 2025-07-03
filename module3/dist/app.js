"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World! ');
});
app.get('/todos', (req, res) => {
    res.send('todo server is loading .........');
});
exports.default = app;
/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 *
 * app file --> routing , handler, middleware, route related error handling
 *
 * app folder ----------> app business logic handling like create, read , update, delete
 */ 
