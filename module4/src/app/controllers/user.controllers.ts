import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z from "zod";
import bcrypt from "bcryptjs";

export const userRouter = express.Router();

const createUserZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional()
});

// post user 
userRouter.post("/create-user", async (req: Request, res: Response) => {
    try {
        // zod validation
        // const body = await createUserZodSchema.parseAsync(req.body);
        const body = req.body;

        // const password = await bcrypt.hash(body.password, 10);
        // body.password = password;


        // built in and  customs instance methods
        // const user = new User(body)
        // const password = await user.hashPassword(body.password)
        // user.password = password;
        // await user.save();

        //  built in and customs statics methods
        const password = await User.hashPassword(body.password);
        body.password = password;
        const user = await User.create(body)
        res.status(201).json({
            message: "user created success",
            success: true,
            data: user
        })
    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        })
    }
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