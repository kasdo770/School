import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")

export async function POST(request) {
    const body = await request.json()

    const { pass, log } = await ValidateName(body.name)

    if (pass == false) return Response.json(log)

    const newSchool = await prisma.school.create({
        data: {
            name: body.name,
            contactNo: body.contactNo,
            ID: body.ID,
            password: body.password,
        }
    })


    return Response.json(newSchool)
}