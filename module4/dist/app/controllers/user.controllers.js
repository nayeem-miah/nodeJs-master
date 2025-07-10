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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
const zod_1 = __importDefault(require("zod"));
exports.userRouter = express_1.default.Router();
const createUserZodSchema = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    age: zod_1.default.number(),
    email: zod_1.default.string(),
    password: zod_1.default.string(),
    role: zod_1.default.string().optional()
});
// post user 
exports.userRouter.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield user_model_1.User.create(body);
        res.status(201).json({
            message: "user created success",
            success: true,
            data: user
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
}));
// get all user
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // filter
    const userEmail = req.query.email ? req.query.email : "";
    let users = [];
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
    users = yield user_model_1.User.find();
    res.status(200).json({
        message: "find all user success",
        success: true,
        result: users
    });
}));
// find a user
exports.userRouter.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(req.params.userId);
    res.status(200).json({
        message: "single user find success",
        success: true,
        result: result
    });
}));
// update single user
exports.userRouter.patch("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const userUpdatedDoc = req.body;
    const result = yield user_model_1.User.findByIdAndUpdate(userId, userUpdatedDoc, { new: true });
    res.status(200).json({
        message: "user created success",
        success: true,
        result: result
    });
}));
// deleted single user
exports.userRouter.delete("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    // const result = await User.findByIdAndDelete(userId)
    const result = yield user_model_1.User.findOneAndDelete({ _id: userId });
    res.status(200).json({
        message: "user deleted success",
        success: true,
        result: result
    });
}));
