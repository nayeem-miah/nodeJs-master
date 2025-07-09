import express, { Request, Response } from "express";
import { User } from "../models/user.model";


export const userRouter = express.Router();

// post user 
userRouter.post("/create-user", async (req: Request, res: Response) => {
    const result = await User.create(req.body);
    res.status(201).json({
        message: "user created success",
        success: true,
        result: result
    })
})
// get all user
userRouter.get("/", async (req: Request, res: Response) => {
    const result = await User.find()
    res.status(201).json({
        message: "find all user success",
        success: true,
        result: result
    })
})
