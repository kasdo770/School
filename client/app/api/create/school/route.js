import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateSchool } = require("@/middleware/validations/create/school")

export async function GET(request) {
    const body = await request.json()

    const { pass, log } = await ValidateSchool(body.name, body.ID)

    if (pass == false) throw new Error("الاسم او الرقم القومي مستخدم من قبل")

    const newSchool = await prisma.school.create({
        data: {
            name: body.name,
            ID: body.ID,
            password: body.password,
        }
    })


    return Response.json(newSchool)
}