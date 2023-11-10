import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")

export async function POST(request) {

    const body = await request.json()

    const student = await prisma.user.findFirst({
        where: {
            ID: body.ID
        }
    })

    if (student == null) return Response.json("There is no student with that ID")

    const warning = await prisma.warning.create({
        data: {
            description: body.description,
            student: {
                connect: {
                    id: student.id
                }
            }
        }
    })


    return Response.json(warning)
}