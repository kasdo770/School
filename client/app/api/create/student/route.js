import dbConnect from "@/middleware/mongodb";
import mongoose from "mongoose";
const User = mongoose.model("User")

export async function PUSH() {
    await dbConnect();

    const newUser = await User.create({
        name: 'Omar',
        ID: 'Your Mom',
        role: "Admin"
    })

    return new Response({ newUser })
}