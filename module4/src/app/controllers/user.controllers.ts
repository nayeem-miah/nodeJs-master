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
    res.status(200).json({
        message: "find all user success",
        success: true,
        result: result
    })
})

// find a user
userRouter.get("/:userId", async (req: Request, res: Response) => {
    const result = await User.findById(req.params.userId);
    res.status(200).json({
        message: "single user find success",
        success: true,
        result: result
    })
})

// update single user
userRouter.patch("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const userUpdatedDoc = req.body;
    const result = await User.findByIdAndUpdate(userId, userUpdatedDoc, { new: true })

    res.status(200).json({
        message: "user created success",
        success: true,
        result: result
    })
})
// deleted single user
userRouter.delete("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const result = await User.findByIdAndDelete(userId)
    res.status(200).json({
        message: "user deleted success",
        success: true,
        result: result
    })
})