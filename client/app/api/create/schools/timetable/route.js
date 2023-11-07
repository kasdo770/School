import dbConnect from "@/middleware/mongodb";
const Class = require("@/models/School/TimeTable")


export async function POST(request) {
    await dbConnect();
    const body = await request.json()


    const newUser = await Class.create({
        name: body.name,
        totalStudents: body.totalStudents,
        students: [],
        role: body.role,
        utilities: newUtility.Id,
        code: Math.random(12).floor().toString(16),
        passoword: Math.random(12).floor().toString(16)
    })

    return Response.json(newUser)
}