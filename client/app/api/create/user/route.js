import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")
export async function POST(request) {
    const body = await request.json()
    const role = body.role.toLowerCase()
    const { createUtility } = require("@/middleware/creations/" + role)

    const utility = await createUtility(body)

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            contactNo: body.contactNo,
            ID: body.ID,
            role: body.role,
            password: (Math.random() * 1000000).toString(36).replace('.', ''),
            code: (Math.random() * 1000000).toString(36).replace('.', ''),
            school: {
                connect: {
                    id: body.school
                }
            },
            Utility: utility
        }
    })


    return Response.json(newUser)
}