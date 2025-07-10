import { Model, model, Schema } from "mongoose";

import validator from "validator";
import bcrypt from "bcryptjs"
import { IAddress, IUser, UserInstanceMethods } from "../interfaces/user.interfaces";

// Embedded Documents system --------- sub schemas
const addressSchema = new Schema<IAddress>({
    city: { type: String },
    street: { type: String },
    zip: { type: Number }
}, {
    _id: false
});
const userSchema = new Schema<IUser, Model<IUser, {}>, UserInstanceMethods>({
    firstName: {
        type: String,
        required: [true, "first name is required, {VALUE}"],
        trim: true,
        minlength: [3, "First name must be at least 3 characters,got {VALUE}"],
        maxlength: 10
    },
    lastName: {
        type: String,
        required: [true, "Last name is required , got {VALUE}"],
        trim: true,
        minlength: [3, "Last name must be at least 3 characters,got {VALUE}"],
        maxlength: 10
    },
    age: {
        type: Number,
        required: true,
        min: [18, "age must be at least 18, got {VALUE}"],
        max: 60
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "email common hoye gecha !!😒"],
        lowercase: true,
        // validate: {
        //     validator: function (value) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //     },
        //     message: props => `${props.value} is not a valid email address`
        // },

        validate: [validator.isEmail, "please give me a valid email ${VALUE}"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: {
            values: ["USER", "ADMIN", "SUPERADMIN"],
            message: "Role is not valid got {VALUE}"
        },
        default: "USER",
        uppercase: true
    },
    address: {
        type: addressSchema
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    return password
});


// creating model 
export const User = model<IUser, Model<IUser, {}, UserInstanceMethods>>("User", userSchema);