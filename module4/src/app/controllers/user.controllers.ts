import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z from "zod";

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
        // const password = await User.hashPassword(body.password);
        // body.password = password;
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
    // filter
    const userEmail = req.query.email ? req.query.email : "";
    let users: object[] = [];
    // if (userEmail) {
    //  users = await User.find({ email: "gjh@gmail.com" })
    // users = await User.find({ email: userEmail }) // http://localhost:5000/users?email=gjh@gmail.com
    // } else {
    // users = await User.find()
    // }

    // sorting
    // users = await User.find().sort({ email: "asc" });
    // users = await User.find().sort({ email: "ascending" });
    // users = await User.find().sort({ email: 1});

    // users = await User.find().sort({ email: "desc" });
    // users = await User.find().sort({ email: "ascending" });
    // users = await User.find().sort({ email: -1 });


    // skipping
    // users = await User.find().skip(5);

    // limiting
    // users = await User.find().limit(3)


    users = await User.find()


    res.status(200).json({
        message: "find all user success",
        success: true,
        result: users
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
    // const result = await User.findByIdAndDelete(userId)
    const result = await User.findOneAndDelete({ _id: userId })
    res.status(200).json({
        message: "user deleted success",
        success: true,
        result: result
    })
})