import dbConnect from "@/middleware/mongodb";
const User = require("@/models/Users/User")
const Teacher = require("@/models/Users/Teacher")
const { getSchoolByName } = require("@/middleware/fetch/users")

export async function POST(request) {
    await dbConnect();
    console.log(await request)
    const body = await request.json()
    console.log(body)

    const newTeacher = await Teacher.create({
        paycuts: body.paycuts,
        salary: body.salary,
        subject: body.subject,
        jobRole: body.jobRole,
    })

    console.log(newTeacher)

    return new Response(newTeacher)
}