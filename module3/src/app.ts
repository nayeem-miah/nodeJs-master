import express, { Application } from "express";
import todosRouter from "./app/todos/todos.routes";

const app: Application = express();

app.use(express.json()); // JSON middleware

// application routes
app.use("/todos", todosRouter);

export default app;

/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 * 
 * app file --> routing , handler, middleware, route related error handling
 * 
 * app folder ----------> app business logic handling like create, read , update, delete
 */