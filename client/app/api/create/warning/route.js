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

    const currentTime = new Date()
    const month = currentTime.getMonth() + 1
    const day = currentTime.getDate()
    const year = currentTime.getFullYear()

    const warning = await prisma.report.create({
        data: {
            description: body.description,
            type: body.type,
            date: `${day} / ${month} / ${year}`,
            student: {
                connect: {
                    id: student.id
                }
            }
        }
    })


    return Response.json(warning)
}