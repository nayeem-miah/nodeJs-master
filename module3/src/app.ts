import express, { Application, Request, Response } from "express";
const app: Application = express();


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.get('/todos', (req: Request, res: Response) => {
    res.send('Hello Todos!')
})

export default app;

/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 * 
 * app file --> routing , handler, middleware, route related error handling
 * 
 * app folder ----------> app business logic handling like create, read , update, delete
 */