import express, { Application, NextFunction, Request, Response } from "express";
import todosRouter from "./app/todos/todos.routes";

const app: Application = express();

app.use(express.json()); // JSON middleware

// application routes
app.use("/todos", todosRouter);



app.get("/", (req: Request, res: Response, next: NextFunction) => {
    // console.log({
    //     url: req.url,
    //     method: req.method,
    //     header: req.header
    // });
    next()
},
    async (req: Request, res: Response) => {
        try {
            res.send("welcome to todo app");
        } catch (error) {
            res.status(500).json({
                message: "something went wrong ",
                error: error
            })
        }
    }
)

//  create custom error handler
app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log(something);
        res.send("something went error")
    } catch (error) {
        next(error)
    }

}
)

// route not found 
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({
        message: "route not found"
    })
})

// global error handling 
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong .....",
            error: error
        })
    }
})
export default app;

/**
 * server ---> server handling link --- starting, closing error handling of server. only related to server
 * 
 * app file --> routing , handler, middleware, route related error handling
 * 
 * app folder ----------> app business logic handling like create, read , update, delete
 */